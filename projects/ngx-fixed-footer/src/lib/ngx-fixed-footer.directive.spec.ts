import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxFixedFooterDirective } from './ngx-fixed-footer.directive';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { provideFixedFooter } from './ngx-fixed-footer.provider';

describe('NgxFixedFooterDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    template: ` <main>todo</main>
      <div ngxFixedFooter></div>`,
    imports: [NgxFixedFooterDirective]
  })
  class TestComponent {}

  const mockOptions: NgxFixedFooterOptions = {
    containerSelector: 'main',
    cssAttribute: 'padding'
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).ResizeObserver = jest.fn().mockImplementation((callback) => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
    mockCallback: callback
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        provideFixedFooter(mockOptions),
        { provide: ElementRef, useValue: {} },
        { provide: Renderer2, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
  });

  it('should set create instance on the host element', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const directiveEl = fixture.debugElement.query(By.directive(NgxFixedFooterDirective));
      expect(directiveEl).not.toBeNull();

      const directiveInstance = directiveEl.injector.get(NgxFixedFooterDirective);
      expect(directiveInstance).not.toBeNull();

      expect(directiveInstance.containerSelector()).toBe(mockOptions.containerSelector);
      expect(directiveInstance.cssAttribute()).toBe(mockOptions.cssAttribute);
    });
  });

  it('should destroy instance on the hos element', () => {
    fixture.detectChanges();
    fixture.whenStable().then(
      fakeAsync(() => {
        const directiveEl = fixture.debugElement.query(By.directive(NgxFixedFooterDirective));
        const directiveInstance = directiveEl.injector.get(NgxFixedFooterDirective);
        tick(1000);
        directiveInstance.ngOnDestroy();
        expect(directiveEl).toBeNull();
      })
    );
  });
});
