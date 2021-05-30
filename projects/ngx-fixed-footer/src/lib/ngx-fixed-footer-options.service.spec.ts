import { TestBed } from '@angular/core/testing';
import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';
import { NgxFixedFooterModule } from './ngx-fixed-footer.module';


describe('NgxFixedFooterOptionsService', () => {
  let service: NgxFixedFooterOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxFixedFooterModule]
    });
    service = TestBed.inject(NgxFixedFooterOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
