import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  computed,
  effect,
  inject,
  input,
  signal
} from '@angular/core';
import { DEFAULT_FIXED_FOOTER_OPTIONS } from './ngx-fixed-footer.constants';
import { NgxFixedFooterCssAttribute, NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { APP_FIXED_FOOTER_OPTIONS_TOKEN } from './ngx-fixed-footer.provider';

@Directive({
  selector: '[ngxFixedFooter]',
  standalone: true
})
export class NgxFixedFooterDirective implements OnDestroy, OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly el = inject(ElementRef);
  private readonly render = inject(Renderer2);
  private options: NgxFixedFooterOptions =
    inject(APP_FIXED_FOOTER_OPTIONS_TOKEN, { optional: true }) || DEFAULT_FIXED_FOOTER_OPTIONS;
  private readonly hasResizeObserver = typeof ResizeObserver !== 'undefined';

  private offsetHeight = signal<number | undefined>(undefined);
  private resizeObserver = signal<ResizeObserver | undefined>(undefined);
  private prevContainerSelector = signal<string | undefined>(undefined);

  public containerSelector = input<string>(this.options.containerSelector);
  public cssAttribute = input<NgxFixedFooterCssAttribute>(this.options.cssAttribute);

  private container = computed<HTMLElement>(() => {
    const selector = this.containerSelector() || this.options.containerSelector;
    return this.document.body.querySelector<HTMLElement>(selector);
  });

  constructor() {
    // swap selector
    effect(() => {
      if (!this.hasResizeObserver || !this.document) return;
      const cssAttribute = this.cssAttribute();
      const containerSelector = this.containerSelector();
      if (containerSelector) {
        const prevContainerSelector = this.prevContainerSelector();
        if (prevContainerSelector && prevContainerSelector !== containerSelector) {
          this.removeStyle(this.document.body.querySelector(prevContainerSelector), cssAttribute);
        }
        this.setStyle(this.document.body.querySelector(containerSelector), cssAttribute, this.offsetHeight());
        this.prevContainerSelector.set(containerSelector);
      }
    });

    // swap css attribute
    effect(() => {
      if (!this.hasResizeObserver || !this.document) return;
      const cssAttribute = this.cssAttribute();
      if (cssAttribute) {
        const container = this.container();
        this.removeStyle(container, cssAttribute === 'padding' ? 'margin' : 'padding');
        this.setStyle(container, cssAttribute, this.offsetHeight());
      }
    });
  }

  public ngOnInit(): void {
    if (this.hasResizeObserver && this.document) {
      const resizeObserver = new ResizeObserver(() => this.checkHeight());
      resizeObserver.observe(this.html);
    }
  }

  public ngOnDestroy(): void {
    if (this.resizeObserver() && this.document) {
      this.removeStyle(this.container(), this.cssAttribute());
      this.resizeObserver().unobserve(this.html);
    }
  }

  private checkHeight(): void {
    const height = this.html.offsetHeight;
    if (this.offsetHeight() !== height) {
      this.setStyle(this.container(), this.cssAttribute(), height);
      this.offsetHeight.set(height);
    }
  }

  private removeStyle(container: HTMLElement, cssAttribute: NgxFixedFooterCssAttribute): void {
    if (!container) {
      throw new Error(`Cannot removeStyle to undefined container`);
    }
    this.render.setStyle(container, `${cssAttribute}-bottom`, '');
  }

  private setStyle(container: HTMLElement, cssAttribute: NgxFixedFooterCssAttribute, height: number): void {
    if (!container) {
      throw new Error(`Cannot setStyle to undefined container`);
    }
    this.render.setStyle(container, `${cssAttribute}-bottom`, height === 0 ? '' : `${height}px`);
  }

  private get html(): HTMLElement {
    return this.el.nativeElement;
  }
}
