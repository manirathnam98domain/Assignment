import { TestBed } from '@angular/core/testing';

import { AuthserGuard } from './authser.guard';

describe('AuthserGuard', () => {
  let guard: AuthserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
