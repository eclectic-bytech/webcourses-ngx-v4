import { TestBed } from '@angular/core/testing'

import { CustomActivitiesService } from './custom-activities.service'

describe('CustomActivitiesService', () => {
  let service: CustomActivitiesService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CustomActivitiesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
