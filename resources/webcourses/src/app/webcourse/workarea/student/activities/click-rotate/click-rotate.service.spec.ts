import { TestBed } from '@angular/core/testing'

import { ClickRotateService } from './click-rotate.service'

describe('ClickRotateService', () => {
  let service: ClickRotateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ClickRotateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
