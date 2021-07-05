import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a login input', () => {
    const loginInput = fixture.debugElement.query(By.css('#username'));
    expect(loginInput).toBeTruthy();
  });

  it('should contain a password input', () => {
    const passwordInput = fixture.debugElement.query(By.css('#password'));
    expect(passwordInput).toBeTruthy();
  });
});
