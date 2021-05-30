
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxFixedFooterModule } from 'projects/ngx-fixed-footer/src/public-api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgxFixedFooterModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should get github link`, waitForAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/celtian/ngx-fixed-footer');
  }));

  it('should toggle if', () => {
    component.toggleIf();
    fixture.detectChanges();
    expect(component.showFooter).toBe(false);
  });

  it('should toggle display', () => {
    component.toggleDisplay();
    fixture.detectChanges();
    expect(component.displayFooter).toBe(false);
  });

  it('should toggle css attribute', () => {
    component.toggleFooterCssAttribute();
    fixture.detectChanges();
    expect(component.footerCssAttribute).toBe('margin');
  });

  it('should toggle css attribute', () => {
    component.toggleFooterCssAttribute();
    component.toggleFooterCssAttribute();
    fixture.detectChanges();
    expect(component.footerCssAttribute).toBe('padding');
  });

  it('should toggle css selector', () => {
    component.toggleCssSelector();
    fixture.detectChanges();
    expect(component.containerSelector).toBe('#test');
  });

  it('should toggle css selector', () => {
    component.toggleCssSelector();
    component.toggleCssSelector();
    fixture.detectChanges();
    expect(component.containerSelector).toBe('[role="main"]');
  });
});
