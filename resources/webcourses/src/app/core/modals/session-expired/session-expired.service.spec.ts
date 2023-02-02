import { TestBed } from '@angular/core/testing'

import { SessionExpiredService } from './session-expired.service'

describe('SessionExpiredService', () => {
  let service: SessionExpiredService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SessionExpiredService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
