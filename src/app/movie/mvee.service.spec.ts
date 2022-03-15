import { TestBed } from '@angular/core/testing';

import { MveeService } from './mvee.service';

describe('MveeService', () => {
  let service: MveeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MveeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
