import { TestBed } from '@angular/core/testing';
import { DEFAULT_CONTAINER_SELECTOR, DEFAULT_CSS_ATTRIBUTE } from './ngx-fixed-footer.constants';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { APP_FIXED_FOOTER_OPTIONS_TOKEN, provideFixedFooter } from './ngx-fixed-footer.provider';

describe('provideFixedFooter', () => {
  it('should provide the default options if no values are given', () => {
    const options: Partial<NgxFixedFooterOptions> = {};

    TestBed.configureTestingModule({
      providers: [provideFixedFooter(options)]
    });

    const injectedOptions = TestBed.inject(APP_FIXED_FOOTER_OPTIONS_TOKEN);

    expect(injectedOptions.cssAttribute).toBe(DEFAULT_CSS_ATTRIBUTE);
    expect(injectedOptions.containerSelector).toBe(DEFAULT_CONTAINER_SELECTOR);
  });

  it('should override default options with provided values', () => {
    const options: Partial<NgxFixedFooterOptions> = {
      cssAttribute: 'padding',
      containerSelector: '.custom-container'
    };

    TestBed.configureTestingModule({
      providers: [provideFixedFooter(options)]
    });

    const injectedOptions = TestBed.inject(APP_FIXED_FOOTER_OPTIONS_TOKEN);

    expect(injectedOptions.cssAttribute).toBe('padding');
    expect(injectedOptions.containerSelector).toBe('.custom-container');
  });

  it('should override only one of the default options if only one is provided', () => {
    const options: Partial<NgxFixedFooterOptions> = {
      cssAttribute: 'padding'
    };

    TestBed.configureTestingModule({
      providers: [provideFixedFooter(options)]
    });

    const injectedOptions = TestBed.inject(APP_FIXED_FOOTER_OPTIONS_TOKEN);

    expect(injectedOptions.cssAttribute).toBe('padding');
    expect(injectedOptions.containerSelector).toBe(DEFAULT_CONTAINER_SELECTOR);
  });
});
