import { TestBed } from '@angular/core/testing';

import { WebcoursesService } from './webcourses.service';

describe('WebcoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcoursesService = TestBed.get(WebcoursesService);
    expect(service).toBeTruthy();
  });
});
