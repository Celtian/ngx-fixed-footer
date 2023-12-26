import { InjectionToken, Provider } from '@angular/core';
import { DEFAULT_CONTAINER_SELECTOR, DEFAULT_CSS_ATTRIBUTE } from './ngx-fixed-footer.constants';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';

export const APP_FIXED_FOOTER_OPTIONS_TOKEN = new InjectionToken<NgxFixedFooterOptions>('[ngxFixedFooter] Options');

export const provideFixedFooter = (options: NgxFixedFooterOptions): Provider => {
  return {
    provide: APP_FIXED_FOOTER_OPTIONS_TOKEN,
    useValue: {
      cssAttribute: options.cssAttribute || DEFAULT_CSS_ATTRIBUTE,
      containerSelector: options.containerSelector || DEFAULT_CONTAINER_SELECTOR
    }
  };
};
