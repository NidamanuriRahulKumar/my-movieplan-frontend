import { TestBed } from '@angular/core/testing';

import { UsrService } from './usr.service';

describe('UsrService', () => {
  let service: UsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
