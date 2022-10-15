import { TestBed } from '@angular/core/testing';

import { CompletionStatsService } from './completion-stats.service';

describe('CompletionStatsService', () => {
  let service: CompletionStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletionStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
