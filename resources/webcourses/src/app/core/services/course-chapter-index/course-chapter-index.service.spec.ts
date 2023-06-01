import { TestBed } from '@angular/core/testing';

import { CourseChapterIndexService } from './course-chapter-index.service';

describe('CourseChapterIndexService', () => {
  let service: CourseChapterIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseChapterIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
