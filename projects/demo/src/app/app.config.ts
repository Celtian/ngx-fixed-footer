import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxFixedFooterModule } from 'projects/ngx-fixed-footer/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgxFixedFooterModule.forRoot({
        containerSelector: '[data-something]',
        cssAttribute: 'margin'
      })
    )
  ]
};
