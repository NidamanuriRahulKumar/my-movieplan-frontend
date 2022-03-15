import { TestBed } from '@angular/core/testing';

import { TktService } from './tkt.service';

describe('TktService', () => {
  let service: TktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
