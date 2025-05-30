import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideFixedFooter } from '../../../ngx-fixed-footer/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
