import { TestBed, inject } from '@angular/core/testing';

import { GetEmployeeListService } from './get-employee-list.service';

describe('GetEmployeeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEmployeeListService]
    });
  });

  it('should be created', inject([GetEmployeeListService], (service: GetEmployeeListService) => {
    expect(service).toBeTruthy();
  }));
});
