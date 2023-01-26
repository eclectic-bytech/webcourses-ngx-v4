import { TestBed } from '@angular/core/testing';

import { DemoFlagService } from './demo-flag.service';

describe('DemoFlagService', () => {
  let service: DemoFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
