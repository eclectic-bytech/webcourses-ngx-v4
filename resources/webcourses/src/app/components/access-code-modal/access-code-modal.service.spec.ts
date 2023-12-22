import { TestBed } from '@angular/core/testing'

import { AccessCodeModalService } from './access-code-modal.service'

describe('AccessCodeModalService', () => {
  let service: AccessCodeModalService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AccessCodeModalService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
