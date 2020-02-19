import { TestBed } from '@angular/core/testing';

import { NgxFormControlErrorsService } from './ngx-form-control-errors.service';

describe('NgxFormControlErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormControlErrorsService = TestBed.get(NgxFormControlErrorsService);
    expect(service).toBeTruthy();
  });
});
