import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';

export const ngxFixedFooterOptionsFactory = (options?: NgxFixedFooterOptions): NgxFixedFooterOptionsService => {
  const ngxFixedFooterOptionsService = new NgxFixedFooterOptionsService();
  if (options) {
    if (options.containerSelector) {
      ngxFixedFooterOptionsService.containerSelector = options.containerSelector;
    }
    if (options.cssAttribute) {
      ngxFixedFooterOptionsService.cssAttribute = options.cssAttribute;
    }
  }
  return ngxFixedFooterOptionsService;
};
