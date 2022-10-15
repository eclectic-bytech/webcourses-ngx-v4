import { TestBed } from '@angular/core/testing'

import { SelectedService } from './selected.service'

describe('SelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: SelectedService = TestBed.get(SelectedService)
    expect(service).toBeTruthy()
  })
})
