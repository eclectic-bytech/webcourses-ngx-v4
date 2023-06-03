import { TestBed } from '@angular/core/testing'

import { WebcourseService } from './webcourse.service'

describe('WebcourseServiceService', () => {
  let service: WebcourseService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(WebcourseService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
