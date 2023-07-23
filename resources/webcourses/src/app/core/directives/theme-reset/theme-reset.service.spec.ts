import { TestBed } from '@angular/core/testing';

import { ThemeResetService } from './theme-reset.service';

describe('ThemeResetService', () => {
  let service: ThemeResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
