import { DOCUMENT } from '@angular/common';
import {
  Directive,
  DoCheck,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';
import { NgxFixedFooterCssAttribute } from './ngx-fixed-footer.interface';

@Directive({
  selector: '[ngxFixedFooter]'
})
export class NgxFixedFooterDirective implements DoCheck, OnDestroy, OnChanges {
  @Input() public containerSelector: string = this.options.containerSelector;
  @Input() public cssAttribute: NgxFixedFooterCssAttribute = this.options.cssAttribute;

  private offsetHeight: number = undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private render: Renderer2,
    private options: NgxFixedFooterOptionsService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
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
      const prev = changes?.containerSelector?.previousValue;
      const next = changes?.cssAttribute?.currentValue;
      if (next !== prev) {
        this.removeStyle(this.container, prev);
        this.setStyle(this.container, next, this.offsetHeight);
      }
    }
  }

  public ngOnDestroy(): void {
    this.removeStyle(this.container, this.cssAttribute);
  }

  public ngDoCheck(): void {
    setTimeout(() => {
      const height = this.html.offsetHeight;
      if (this.offsetHeight != height) {
        this.setStyle(this.container, this.cssAttribute, height);
        this.offsetHeight = height;
      }
    }, 0);
  }

  private removeStyle(container: HTMLElement, cssAttribute: NgxFixedFooterCssAttribute): void {
    this.render.setStyle(container, `${cssAttribute}-bottom`, '');
  }

  private setStyle(container: HTMLElement, cssAttribute: NgxFixedFooterCssAttribute, height: number): void {
    this.render.setStyle(container, `${cssAttribute}-bottom`, height === 0 ? '' : `${height}px`);
  }

  private get container(): HTMLElement {
    return this.document.body.querySelector(this.containerSelector);
  }

  private get html(): HTMLElement {
    return this.el.nativeElement;
  }
}
