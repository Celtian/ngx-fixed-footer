import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideFixedFooter } from 'ngx-fixed-footer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFixedFooter({
      containerSelector: '[data-something]',
      cssAttribute: 'margin'
    })
  ]
};
