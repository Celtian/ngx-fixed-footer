import { Injectable } from '@angular/core';
import { DEFAULT_CONTAINER_SELECTOR, DEFAULT_CSS_ATTRIBUTE } from './ngx-fixed-footer.constants';
import { NgxFixedFooterCssAttribute } from './ngx-fixed-footer.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxFixedFooterOptionsService {
  /**
   * @returns Css attribute of HTML element which gets style. It means margin or padding
   */
  public cssAttribute: NgxFixedFooterCssAttribute = DEFAULT_CSS_ATTRIBUTE;

  /**
   * @returns Css selector of HTML element which gets extra margin or padding
   */
  public containerSelector: string = DEFAULT_CONTAINER_SELECTOR;
}
