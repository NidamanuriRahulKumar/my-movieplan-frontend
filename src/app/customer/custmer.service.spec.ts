import { TestBed } from '@angular/core/testing';

import { CustmerService } from './custmer.service';

describe('CustmerService', () => {
  let service: CustmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
