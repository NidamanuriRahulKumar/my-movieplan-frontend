import { TestBed } from '@angular/core/testing';

import { ShhowService } from './shhow.service';

describe('ShhowService', () => {
  let service: ShhowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShhowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
