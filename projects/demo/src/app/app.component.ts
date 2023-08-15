import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgxFixedFooterModule } from 'projects/ngx-fixed-footer/src/lib/ngx-fixed-footer.module';
import { VERSION } from '../environments/version';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgxFixedFooterModule]
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

  constructor(private cdr: ChangeDetectorRef) {}

  public toggleIf(): void {
    this.showFooter = !this.showFooter;
    this.cdr.markForCheck();
  }

  public toggleDisplay(): void {
    this.displayFooter = !this.displayFooter;
    this.cdr.markForCheck();
  }

  public toggleFooterCssAttribute(): void {
    if (this.footerCssAttribute === 'padding') {
      this.footerCssAttribute = 'margin';
    } else {
      this.footerCssAttribute = 'padding';
    }
    this.cdr.markForCheck();
  }

  public toggleCssSelector(): void {
    if (this.containerSelector === '[role="main"]') {
      this.containerSelector = '#test';
    } else {
      this.containerSelector = '[role="main"]';
    }
    this.cdr.markForCheck();
  }
}
