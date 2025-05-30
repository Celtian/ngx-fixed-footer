import { ApplicationConfig } from '@angular/core';
import { provideFixedFooter } from '../../../ngx-fixed-footer/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZonelessChangeDetection(),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
