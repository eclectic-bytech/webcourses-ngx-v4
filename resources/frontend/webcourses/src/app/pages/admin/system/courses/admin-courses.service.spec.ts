import { TestBed } from '@angular/core/testing';

import { AdminCoursesService } from './admin-courses.service';

describe('AdminCoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCoursesService = TestBed.get(AdminCoursesService);
    expect(service).toBeTruthy();
  });
});
