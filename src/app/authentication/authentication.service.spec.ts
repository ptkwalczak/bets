import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('Authentication service', () => {
  let fixture: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
    });
    fixture = TestBed.inject(AuthenticationService);
  });

  it('should authenticate a user', () => {
    expect(fixture.isAuthenticated()).toEqual(true);
  });
});
