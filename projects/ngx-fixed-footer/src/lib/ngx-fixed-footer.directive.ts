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

@Directive({
  selector: '[ngxFixedFooter]'
})
export class NgxFixedFooterDirective implements DoCheck, OnDestroy, OnChanges {
  @Input() public containerSelector: string = '[role="main"]';
  @Input() public cssAttribute: 'padding' | 'margin' = 'padding';

  private offsetHeight: number = undefined;

  constructor(private el: ElementRef, private render: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // swap selector
    if (changes?.containerSelector && !changes?.containerSelector?.firstChange) {
      if (changes?.containerSelector?.currentValue !== changes?.containerSelector?.previousValue) {
        const prev = changes?.containerSelector?.previousValue;
        const next = changes?.containerSelector?.currentValue;
        this.removeStyle(this.document.body.querySelector(prev), this.cssAttribute);
        this.setStyle(this.document.body.querySelector(next), this.cssAttribute, this.offsetHeight);
      }
    }

    // swap margin and padding
    if (changes?.cssAttribute && !changes?.cssAttribute?.firstChange) {
      if (changes?.cssAttribute?.currentValue === 'margin') {
        const container = this.container;
        this.removeStyle(container, 'padding');
        this.setStyle(container, 'margin', this.offsetHeight);
      } else if (changes?.cssAttribute?.currentValue === 'padding') {
        const container = this.container;
        this.removeStyle(container, 'margin');
        this.setStyle(container, 'padding', this.offsetHeight);
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

  private removeStyle(container: HTMLElement, cssAttribute: 'padding' | 'margin'): void {
    this.render.setStyle(container, `${cssAttribute}-bottom`, '');
  }

  private setStyle(container: HTMLElement, cssAttribute: 'padding' | 'margin', height: number): void {
    this.render.setStyle(container, `${cssAttribute}-bottom`, height === 0 ? '' : `${height}px`);
  }

  private get container(): HTMLElement {
    return this.document.body.querySelector(this.containerSelector);
  }

  private get html(): HTMLElement {
    return this.el.nativeElement;
  }
}
