import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideFixedFooter } from 'projects/ngx-fixed-footer/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
