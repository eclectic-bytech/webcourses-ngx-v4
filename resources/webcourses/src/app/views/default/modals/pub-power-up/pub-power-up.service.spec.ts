import { TestBed } from '@angular/core/testing'

import { PubPowerUpService } from './pub-power-up.service'

describe('PubPowerUpService', () => {
  let service: PubPowerUpService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PubPowerUpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
