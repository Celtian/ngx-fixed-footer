import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngx-fixed-footer';
  public version = VERSION;
  public readonly Array = Array;
  public loremIpsum =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam posuere lacus quis dolor. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce tellus. Duis viverra diam non justo. In enim a arcu imperdiet malesuada. Cras elementum. Fusce wisi. Mauris metus. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat.';

  public showFooter = true;
  public displayFooter = true;
  public footerCssAttribute: 'padding' | 'margin' = 'padding';
  public containerSelector = '[role="main"]';

  public toggleIf(): void {
    this.showFooter = !this.showFooter;
  }

  public toggleDisplay(): void {
    this.displayFooter = !this.displayFooter;
  }

  public toggleFooterCssAttribute(): void {
    if (this.footerCssAttribute === 'padding') {
      this.footerCssAttribute = 'margin';
    } else {
      this.footerCssAttribute = 'padding';
    }
  }

  public toggleCssSelector(): void {
    if (this.containerSelector === '[role="main"]') {
      this.containerSelector = '#test';
    } else {
      this.containerSelector = '[role="main"]';
    }
  }
}
