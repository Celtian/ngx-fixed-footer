import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideFixedFooter } from 'ngx-fixed-footer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
