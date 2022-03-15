import { TestBed } from '@angular/core/testing';

import { SeetService } from './seet.service';

describe('SeetService', () => {
  let service: SeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
