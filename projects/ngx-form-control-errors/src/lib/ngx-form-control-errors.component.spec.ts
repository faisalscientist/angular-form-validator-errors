import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormControlErrorsComponent } from './ngx-form-control-errors.component';

describe('NgxFormControlErrorsComponent', () => {
  let component: NgxFormControlErrorsComponent;
  let fixture: ComponentFixture<NgxFormControlErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormControlErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormControlErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
