import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFixedFooterOptionsService } from './ngx-fixed-footer-options.service';
import { NgxFixedFooterDirective } from './ngx-fixed-footer.directive';
import { NgxFixedFooterCssAttribute } from './ngx-fixed-footer.interface';

const TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

describe('NgxFixedFooterDirective', () => {
  let renderer: jasmine.SpyObj<Renderer2>;
  let element: jasmine.SpyObj<ElementRef>;
  let options: jasmine.SpyObj<NgxFixedFooterOptionsService>;
  let fixture: ComponentFixture<TestDirectiveComponent>;

  @Component({
    template: `
      <div #main class="main" style="width: 100%; min-height: 100vh;">
        <div *ngFor="let i of Array.from({ length: 25 })">{{ text }}</div>
      </div>
      <div #alternative class="alternative" style="width: 100%;"></div>
      <div ngxFixedFooter [containerSelector]="containerSelector" [cssAttribute]="cssAttribute" style="width: 100%; background-color: orange;">{{ text }}</div>
    `
  })
  class TestDirectiveComponent {
    public text = TEXT;
    public readonly Array = Array;
    public containerSelector = '.main';
    public cssAttribute: NgxFixedFooterCssAttribute = 'padding';
    @ViewChild(NgxFixedFooterDirective) public directive: NgxFixedFooterDirective;
    @ViewChild('main') public main: ElementRef;
    @ViewChild('alternative') public alternative: ElementRef;
  }

  beforeEach(() => {
    options = jasmine.createSpyObj('NgxFixedFooterOptionsService', ['cssAttribute', 'containerSelector']);
    element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

    fixture = TestBed.configureTestingModule({
      declarations: [ TestDirectiveComponent, NgxFixedFooterDirective ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: DOCUMENT, useValue: document },
        { provide: Renderer2, useValue: renderer },
        { provide: ElementRef, useValue: element },
        { provide: NgxFixedFooterOptionsService, useValue: options },
      ]
    }).createComponent(TestDirectiveComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new NgxFixedFooterDirective(document, element, renderer, options);
    expect(directive).toBeTruthy();
  });

  it('should detect change of padding', (done) => {
    const component = fixture.componentInstance;
    component.cssAttribute = 'padding';
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.main.nativeElement.style.paddingBottom).not.toEqual('');
      done();
    }, 100);
  })

  it('should detect change of margin', (done) => {
    const component = fixture.componentInstance;
    component.cssAttribute = 'margin';
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.main.nativeElement.style.marginBottom).not.toEqual('');
      done();
    }, 100);
  })

  it('should detect change of css selector to main', (done) => {
    const component = fixture.componentInstance;
    component.cssAttribute = 'padding';
    component.containerSelector = '.main';
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.main.nativeElement.style.paddingBottom).not.toEqual('');
      done();
    }, 100);
  })

  it('should detect change of css selector to alternative', (done) => {
    const component = fixture.componentInstance;
    component.cssAttribute = 'padding';
    component.containerSelector = '.alternative';
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.alternative.nativeElement.style.paddingBottom).not.toEqual('');
      done();
    }, 100);
  })
})
