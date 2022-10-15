import { TestBed } from '@angular/core/testing';

import { PaymentSuccessfulService } from './payment-successful.service';

describe('PaymentSuccessfulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentSuccessfulService = TestBed.get(PaymentSuccessfulService);
    expect(service).toBeTruthy();
  });
});
