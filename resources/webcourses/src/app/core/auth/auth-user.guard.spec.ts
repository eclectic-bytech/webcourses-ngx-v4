import { TestBed } from '@angular/core/testing'

import { AuthUserGuard } from './auth-user.guard'

describe('AuthUserGuard', () => {
  let guard: AuthUserGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(AuthUserGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
