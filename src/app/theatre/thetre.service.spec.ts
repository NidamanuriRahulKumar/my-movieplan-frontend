import { TestBed } from '@angular/core/testing';

import { ThetreService } from './thetre.service';

describe('ThetreService', () => {
  let service: ThetreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThetreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
