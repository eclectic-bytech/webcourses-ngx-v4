import { TestBed } from '@angular/core/testing'

import { CouponFieldService } from './coupon-field.service'

describe('CouponFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: CouponFieldService = TestBed.get(CouponFieldService)
    expect(service).toBeTruthy()
  })
})
