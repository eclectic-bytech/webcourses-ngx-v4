import { TestBed } from '@angular/core/testing'

import { DeleteCourseService } from './delete-course.service'

describe('DeleteCourseService', () => {
  let service: DeleteCourseService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DeleteCourseService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
