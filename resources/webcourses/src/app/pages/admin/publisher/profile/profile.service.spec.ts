import { TestBed } from '@angular/core/testing'

import { PublisherProfileService } from './profile.service'

describe('PublisherProfileAdminService', () => {
  let service: PublisherProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
