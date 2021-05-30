import { TestBed } from '@angular/core/testing';

import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';

describe('NgxFixedFooterOptionsService', () => {
  let service: NgxFixedFooterOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFixedFooterOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
