import { Component, signal } from '@angular/core';
import { NgxFixedFooterDirective } from 'ngx-fixed-footer';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  imports: [NgxFixedFooterDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title = 'ngx-fixed-footer';
  public version = VERSION;
  public readonly Array = Array;
  public loremIpsum =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam posuere lacus quis dolor. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce tellus. Duis viverra diam non justo. In enim a arcu imperdiet malesuada. Cras elementum. Fusce wisi. Mauris metus. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat.';

  public showFooter = signal(true);
  public displayFooter = signal(true);
  public footerCssAttribute = signal<'padding' | 'margin'>('padding');
  public containerSelector = signal('[role="main"]');

  public toggleIf(): void {
    this.showFooter.update((value) => !value);
  }

  public toggleDisplay(): void {
    this.displayFooter.update((value) => !value);
  }

  public toggleFooterCssAttribute(): void {
    this.footerCssAttribute.update((value) => {
      return value === 'padding' ? 'margin' : 'padding';
    });
  }

  public toggleCssSelector(): void {
    this.containerSelector.update((value) => {
      return value === '[role="main"]' ? '#test' : '[role="main"]';
    });
  }
}
