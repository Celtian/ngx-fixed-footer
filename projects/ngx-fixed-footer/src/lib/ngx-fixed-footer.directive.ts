import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  inject
} from '@angular/core';
import { DEFAULT_FIXED_FOOTER_OPTIONS } from './ngx-fixed-footer.constants';
import { NgxFixedFooterCssAttribute, NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { APP_FIXED_FOOTER_OPTIONS_TOKEN } from './ngx-fixed-footer.provider';

@Directive({
  selector: '[ngxFixedFooter]',
  standalone: true
})
export class NgxFixedFooterDirective implements OnDestroy, OnChanges, OnInit {
  private options: NgxFixedFooterOptions =
    inject(APP_FIXED_FOOTER_OPTIONS_TOKEN, { optional: true }) || DEFAULT_FIXED_FOOTER_OPTIONS;
  private offsetHeight: number = undefined;
  private resizeObserver: ResizeObserver;

  @Input() public containerSelector: string = this.options.containerSelector;
  @Input() public cssAttribute: NgxFixedFooterCssAttribute = this.options.cssAttribute;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private el: ElementRef,
    private render: Renderer2
  ) {}

  public ngOnInit(): void {
    if (this.hasResizeObserver && this.document) {
      const resizeObserver = new ResizeObserver(() => this.checkHeight());
      resizeObserver.observe(this.html);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.hasResizeObserver && this.document) {
      // swap selector
      if (changes?.containerSelector && !changes?.containerSelector?.firstChange) {
        const prev = changes?.containerSelector?.previousValue;
        const next = changes?.containerSelector?.currentValue;
        if (next !== prev) {
          this.removeStyle(this.document.body.querySelector(prev), this.cssAttribute);
          this.setStyle(this.document.body.querySelector(next), this.cssAttribute, this.offsetHeight);
        }
      }

      // swap css attribute
      if (changes?.cssAttribute && !changes?.cssAttribute?.firstChange) {
        const prev = changes?.cssAttribute?.previousValue;
        const next = changes?.cssAttribute?.currentValue;
        if (next !== prev) {
          this.removeStyle(this.container, prev);
          this.setStyle(this.container, next, this.offsetHeight);
        }
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.hasResizeObserver && this.document) {
      this.removeStyle(this.container, this.cssAttribute);
      if (this.resizeObserver) {
        this.resizeObserver.unobserve(this.html);
      }
    }
  }

  private checkHeight(): void {
    const height = this.html.offsetHeight;
    if (this.offsetHeight !== height) {
      this.setStyle(this.container, this.cssAttribute, height);
      this.offsetHeight = height;
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

  private get container(): HTMLElement {
    const selector = this.containerSelector || this.options.containerSelector;
    const container = this.document.body.querySelector(selector);
    if (!container) {
      console.warn(`Container '${selector}' was not found`);
    }
    return container;
  }

  private get html(): HTMLElement {
    return this.el.nativeElement;
  }

  private get hasResizeObserver(): boolean {
    return typeof ResizeObserver !== 'undefined';
  }
}
