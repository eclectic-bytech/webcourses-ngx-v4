import { TestBed } from '@angular/core/testing';

import { PublisherProfileAdminService } from './publisher-profile-admin.service';

describe('PublisherProfileAdminService', () => {
  let service: PublisherProfileAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherProfileAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
