import { TestBed } from '@angular/core/testing'

import { CompletionCertService } from './completion-cert.service'

describe('CompletionCertService', () => {
  let service: CompletionCertService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CompletionCertService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
