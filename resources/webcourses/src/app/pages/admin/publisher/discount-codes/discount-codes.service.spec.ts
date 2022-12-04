import { TestBed } from '@angular/core/testing';

import { DiscountCodesService } from './discount-codes.service';

describe('DiscountCodesService', () => {
  let service: DiscountCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
