import { TestBed } from '@angular/core/testing';

import { WildernessService } from './wilderness.service';

describe('WildernessService', () => {
  let service: WildernessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildernessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
