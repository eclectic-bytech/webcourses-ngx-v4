import { TestBed } from '@angular/core/testing'

import { SelectedCourseService } from './selected-course.service'

describe('SelectedCourseService', () => {
  let service: SelectedCourseService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SelectedCourseService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
