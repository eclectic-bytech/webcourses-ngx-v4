import { TestBed } from '@angular/core/testing';

import { AuthGuardUserGuard } from './auth-guard-user.guard';

describe('AuthGuardUserGuard', () => {
  let guard: AuthGuardUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
