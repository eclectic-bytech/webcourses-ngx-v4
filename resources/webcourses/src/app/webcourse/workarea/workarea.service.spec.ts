import { TestBed } from '@angular/core/testing'

import { WorkareaService } from './workarea.service'

describe('WorkareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: WorkareaService = TestBed.get(WorkareaService)
    expect(service).toBeTruthy()
  })
})
