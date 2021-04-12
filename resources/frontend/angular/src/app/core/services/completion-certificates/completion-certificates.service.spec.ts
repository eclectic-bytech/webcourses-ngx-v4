import { TestBed } from '@angular/core/testing'

import { CompletionCertificatesService } from './completion-certificates.service'

describe('CompletionCertificatesService', () => {
  let service: CompletionCertificatesService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CompletionCertificatesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
