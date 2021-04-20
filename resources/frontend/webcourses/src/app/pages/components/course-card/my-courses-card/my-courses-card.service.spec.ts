import { TestBed } from '@angular/core/testing'

import { MyCoursesCardService } from './my-courses-card.service'

describe('MyCoursesCardService', () => {
  let service: MyCoursesCardService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MyCoursesCardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
