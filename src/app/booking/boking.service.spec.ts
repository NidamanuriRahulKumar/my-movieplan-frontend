import { TestBed } from '@angular/core/testing';

import { BokingService } from './boking.service';

describe('BokingService', () => {
  let service: BokingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
