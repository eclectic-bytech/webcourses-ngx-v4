import { TestBed } from '@angular/core/testing'

import { ChapterIndexService } from './chapter-index.service'

describe('ChapterIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: ChapterIndexService = TestBed.get(ChapterIndexService)
    expect(service).toBeTruthy()
  })
})
