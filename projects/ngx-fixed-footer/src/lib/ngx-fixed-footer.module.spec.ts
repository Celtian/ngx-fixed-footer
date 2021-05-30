import { TestBed } from "@angular/core/testing";
import { NgxFixedFooterOptionsService } from "./ngx-fixed-footer-options.service";
import { FOR_ROOT_OPTIONS_TOKEN, NgxFixedFooterModule } from "./ngx-fixed-footer.module";

describe('NgxFixedFooterModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxFixedFooterModule.forRoot()]
    });
  });

  it(`should provide services`, () => {
    const options = TestBed.inject(FOR_ROOT_OPTIONS_TOKEN);
    expect(options).toBe(undefined);
  });

  it(`should provide services2`, () => {
    const optionsService = TestBed.inject(NgxFixedFooterOptionsService);
    expect(optionsService).toEqual(new NgxFixedFooterOptionsService());
  });
})
