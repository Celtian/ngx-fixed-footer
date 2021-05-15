/*
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFixedFooterDirective } from './ngx-fixed-footer.directive';

describe('NgxFixedFooterDirective', () => {
  @Component({
    template: `
    <div
      *NgxFixedFooter="3;
      let index = index;
      let even = even;
      let odd = odd;
      let first = first;
      let last = last;">
      {{ index }} {{ even }} {{ odd }} {{ first }} {{ last }}
    </div>`
  })
  class TestDirectiveComponent {
    @ViewChild(NgxFixedFooterDirective) public directive: NgxFixedFooterDirective;

    public count = 3;

    public increment(): void {
      if (this.count < 100) {
        this.count++;
      }
    }

    public decrement(): void {
      if (this.count > 0) {
        this.count--;
      }
    }
  }

  let fixture: ComponentFixture<TestDirectiveComponent>;
  let templateRef: jasmine.SpyObj<TemplateRef<RepeatDirectiveContext>>;
  let viewContainer: jasmine.SpyObj<ViewContainerRef>;

  beforeEach(() => {
    templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',['elementRef', 'createEmbeddedView']);
    viewContainer = jasmine.createSpyObj('ViewContainerRef', ['length', 'remove', 'createEmbeddedView', 'createComponent']);

    fixture = TestBed.configureTestingModule({
      declarations: [ TestDirectiveComponent, NgxFixedFooterDirective ],
      providers: [
        { provide: TemplateRef, useValue: templateRef },
        { provide: ViewContainerRef, useValue: viewContainer },
      ]
    }).createComponent(TestDirectiveComponent)

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new NgxFixedFooterDirective(templateRef, viewContainer);
    expect(directive).toBeTruthy();
  });
});
*/
