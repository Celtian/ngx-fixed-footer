import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ngxFixedFooterOptionsFactory } from './ngx-fixed-footer-factory';
import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';
import { NgxFixedFooterDirective } from './ngx-fixed-footer.directive';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgxFixedFooterOptions>(
  'forRoot() NgxFixedFooterOptionsService configuration.'
);

@NgModule({
  declarations: [NgxFixedFooterDirective],
  exports: [NgxFixedFooterDirective]
})
export class NgxFixedFooterModule {
  public static forRoot(options?: NgxFixedFooterOptions): ModuleWithProviders<NgxFixedFooterModule> {
    return {
      ngModule: NgxFixedFooterModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: NgxFixedFooterOptionsService,
          useFactory: ngxFixedFooterOptionsFactory,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}
