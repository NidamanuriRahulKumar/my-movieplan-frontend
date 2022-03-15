import { TestBed } from '@angular/core/testing';

import { ScreService } from './scre.service';

describe('ScreService', () => {
  let service: ScreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
