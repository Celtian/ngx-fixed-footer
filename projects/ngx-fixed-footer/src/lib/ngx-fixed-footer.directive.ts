import { Directive, ElementRef, Renderer2, inject, input, signal } from '@angular/core';
import { DEFAULT_FIXED_FOOTER_OPTIONS } from './ngx-fixed-footer.constants';
import { NgxFixedFooterCssAttribute, NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { APP_FIXED_FOOTER_OPTIONS_TOKEN } from './ngx-fixed-footer.provider';

@Directive({
  selector: '[ngxFixedFooter]'
})
export class NgxFixedFooterDirective {
  // private readonly document = inject(DOCUMENT);
  private readonly el = inject(ElementRef);
  private readonly render = inject(Renderer2);
  private options: NgxFixedFooterOptions =
    inject(APP_FIXED_FOOTER_OPTIONS_TOKEN, { optional: true }) || DEFAULT_FIXED_FOOTER_OPTIONS;
  private readonly hasResizeObserver = typeof ResizeObserver !== 'undefined';
  private resizeObserver?: ResizeObserver;

  private offsetHeight = signal<number | undefined>(undefined);
  private prevContainerSelector = signal<string | undefined>(undefined);

  public containerSelector = input<string>(this.options.containerSelector);
  public cssAttribute = input<NgxFixedFooterCssAttribute>(this.options.cssAttribute);

  /*
  private container = computed(() => {
    const selector = this.containerSelector() || this.options.containerSelector;
    return this.document.body.querySelector<HTMLElement>(selector);
  });
  */

  /*
  constructor() {
    // swap selector
    effect(() => {
      if (!this.hasResizeObserver || !this.document) return;
      const containerSelector = this.containerSelector();
      const offsetHeight = this.offsetHeight();
      if (!containerSelector || typeof offsetHeight !== 'number') return;
      const cssAttribute = this.cssAttribute();
      const prevContainerSelector = this.prevContainerSelector();
      if (prevContainerSelector && prevContainerSelector !== containerSelector) {
        const prevContainer = this.document.body.querySelector<HTMLElement>(prevContainerSelector);
        if (prevContainer) {
          this.removeStyle(prevContainer, cssAttribute);
        }
      }
      const container = this.document.body.querySelector<HTMLElement>(containerSelector);
      if (container) {
        this.setStyle(container, cssAttribute, offsetHeight);
        this.prevContainerSelector.set(containerSelector);
      }
    });
    

    // swap css attribute
    effect(() => {
      if (!this.hasResizeObserver || !this.document) return;
      const container = this.container();
      const offsetHeight = this.offsetHeight();
      if (!container || typeof offsetHeight !== 'number') return;
      const cssAttribute = this.cssAttribute();
      this.removeStyle(container, cssAttribute === 'padding' ? 'margin' : 'padding');
      this.setStyle(container, cssAttribute, offsetHeight);
    });
  }
  

  public ngOnInit(): void {
    if (this.hasResizeObserver && this.document) {
      this.resizeObserver = new ResizeObserver(() => this.checkHeight());
      this.resizeObserver.observe(this.html);
    }
  }

  public ngOnDestroy(): void {
    const container = this.container();
    if (this.resizeObserver && this.document && container) {
      this.removeStyle(container, this.cssAttribute());
      this.resizeObserver.unobserve(this.html);
    }
  }
     

  private checkHeight(): void {
    const height = this.html.offsetHeight;
    const container = this.container();
    if (this.offsetHeight() !== height && container) {
      this.setStyle(container, this.cssAttribute(), height);
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
    */
}
