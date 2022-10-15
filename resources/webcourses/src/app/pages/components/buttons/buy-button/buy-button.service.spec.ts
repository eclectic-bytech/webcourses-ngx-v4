import { TestBed } from '@angular/core/testing'

import { BuyButtonService } from './buy-button.service'

describe('BuyButtonService', () => {
  let service: BuyButtonService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BuyButtonService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
