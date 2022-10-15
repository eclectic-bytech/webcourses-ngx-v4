import { TestBed } from '@angular/core/testing'

import { TaxStatusService } from './tax-status.service'

describe('TaxStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: TaxStatusService = TestBed.get(TaxStatusService)
    expect(service).toBeTruthy()
  })
})
