import { ngxFixedFooterOptionsFactory } from "./ngx-fixed-footer-factory";
import { NgxFixedFooterOptionsService } from "./ngx-fixed-footer-options.service";
import { DEFAULT_CONTAINER_SELECTOR, DEFAULT_CSS_ATTRIBUTE } from "./ngx-fixed-footer.constants";

describe('NgxFixedFooterOptionsFactory', () => {
  it('should return instance of NgxFixedFooterOptionsService', () => {
    expect(ngxFixedFooterOptionsFactory()).toBeInstanceOf(NgxFixedFooterOptionsService);
  });

  it('should return default values if undefined',() => {
    const optionsService: NgxFixedFooterOptionsService = ngxFixedFooterOptionsFactory(undefined);
    expect(optionsService.containerSelector).toEqual(DEFAULT_CONTAINER_SELECTOR);
    expect(optionsService.cssAttribute).toEqual(DEFAULT_CSS_ATTRIBUTE);
  });

  it('should return default values if null',() => {
    const optionsService: NgxFixedFooterOptionsService = ngxFixedFooterOptionsFactory(undefined);
    expect(optionsService.containerSelector).toEqual(DEFAULT_CONTAINER_SELECTOR);
    expect(optionsService.cssAttribute).toEqual(DEFAULT_CSS_ATTRIBUTE);
  });

  it('should return containerSelector if set value',() => {
    expect(ngxFixedFooterOptionsFactory({ containerSelector: '.content' }).containerSelector).toEqual('.content');
  });

  it('should return cssAttribute if set value',() => {
    expect(ngxFixedFooterOptionsFactory({ cssAttribute: 'padding' }).cssAttribute).toEqual('padding');
    expect(ngxFixedFooterOptionsFactory({ cssAttribute: 'margin' }).cssAttribute).toEqual('margin');
  });
})
