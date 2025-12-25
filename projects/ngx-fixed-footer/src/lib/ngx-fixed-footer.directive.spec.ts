import { Component, Renderer2, type OnDestroy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxFixedFooterDirective } from './ngx-fixed-footer.directive';
import { NgxFixedFooterOptions } from './ngx-fixed-footer.interface';
import { provideFixedFooter } from './ngx-fixed-footer.provider';

describe('NgxFixedFooterDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: NgxFixedFooterDirective;
  let renderer: Renderer2;
  let containerEl: HTMLElement;

  let callback: (entries: ResizeObserverEntry[]) => void;
  const resizeObserverMock = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  };

  beforeEach(() => {
    class ResizeObserver {
      constructor(cb: (entries: ResizeObserverEntry[]) => void) {
        callback = cb;
      }
      observe = resizeObserverMock.observe;
      unobserve = resizeObserverMock.unobserve;
      disconnect = resizeObserverMock.disconnect;
    }
    vi.stubGlobal('ResizeObserver', ResizeObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  @Component({
    imports: [NgxFixedFooterDirective],
    standalone: true,
    template: ` <main>todo</main>
      <div ngxFixedFooter></div>`
  })
  class TestComponent {}

  const mockOptions: NgxFixedFooterOptions = {
    containerSelector: 'main',
    cssAttribute: 'padding'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [provideFixedFooter(mockOptions)]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    const directiveEl = fixture.debugElement.query(By.directive(NgxFixedFooterDirective));
    directive = directiveEl.injector.get(NgxFixedFooterDirective);
    renderer = fixture.componentRef.injector.get(Renderer2);
    containerEl = fixture.nativeElement.querySelector(mockOptions.containerSelector);
    fixture.detectChanges();
  });

  it('should create an instance on the host element', () => {
    expect(directive).not.toBeNull();
    expect(directive.containerSelector()).toBe(mockOptions.containerSelector);
    expect(directive.cssAttribute()).toBe(mockOptions.cssAttribute);
  });

  it('should observe the element on init', () => {
    expect(resizeObserverMock.observe).toHaveBeenCalledWith(
      fixture.debugElement.query(By.directive(NgxFixedFooterDirective)).nativeElement
    );
  });

  it('should set the container height on resize', () => {
    const spy = vi.spyOn(renderer, 'setStyle');
    const directiveEl = fixture.debugElement.query(By.directive(NgxFixedFooterDirective)).nativeElement as HTMLElement;
    const height = 20;

    vi.spyOn(directiveEl, 'offsetHeight', 'get').mockReturnValue(height);

    callback([{ contentRect: { height } } as ResizeObserverEntry]);

    expect(spy).toHaveBeenCalledWith(containerEl, `${mockOptions.cssAttribute}-bottom`, `${height}px`);
  });

  it('should destroy instance on the host element', () => {
    (directive as OnDestroy).ngOnDestroy();
    expect(resizeObserverMock.unobserve).toHaveBeenCalled();
  });
});
