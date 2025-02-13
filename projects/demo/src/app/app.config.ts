import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideFixedFooter } from 'ngx-fixed-footer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
