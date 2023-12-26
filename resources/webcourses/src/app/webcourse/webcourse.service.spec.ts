import { TestBed } from '@angular/core/testing';

import { WebcourseService } from './webcourse.service';

describe('WebcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcourseService = TestBed.get(WebcourseService);
    expect(service).toBeTruthy();
  });
});
