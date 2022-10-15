import { TestBed } from '@angular/core/testing'

import { CourseAccessBlockService } from './course-access-block.service'

describe('CourseAccessBlockService', () => {
  let service: CourseAccessBlockService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CourseAccessBlockService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
