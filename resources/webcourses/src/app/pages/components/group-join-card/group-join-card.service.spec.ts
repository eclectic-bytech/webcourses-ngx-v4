import { TestBed } from '@angular/core/testing';

import { GroupJoinCardService } from './group-join-card.service';

describe('GroupJoinCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupJoinCardService = TestBed.get(GroupJoinCardService);
    expect(service).toBeTruthy();
  });
});
