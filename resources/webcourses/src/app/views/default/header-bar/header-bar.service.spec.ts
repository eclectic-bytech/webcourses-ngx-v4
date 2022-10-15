import { TestBed } from '@angular/core/testing'

import { HeaderBarService } from './header-bar.service'

describe('HeaderBarService', () => {
  let service: HeaderBarService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HeaderBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
