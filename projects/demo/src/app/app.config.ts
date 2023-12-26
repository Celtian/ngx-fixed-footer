import { ApplicationConfig } from '@angular/core';
import { provideFixedFooter } from 'projects/ngx-fixed-footer/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
