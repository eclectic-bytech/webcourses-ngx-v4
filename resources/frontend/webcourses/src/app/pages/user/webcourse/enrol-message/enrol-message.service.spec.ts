import { TestBed } from '@angular/core/testing';

import { EnrolMessageService } from './enrol-message.service';

describe('EnrolMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolMessageService = TestBed.get(EnrolMessageService);
    expect(service).toBeTruthy();
  });
});
