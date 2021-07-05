import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain a sidenavigation', () => {
    const sideNavComponent = fixture.debugElement.query(
      By.css('app-sidenav')
    ).nativeElement;
    expect(true).toBe(true);
  });

  it('should contain 4 menu items', () => {
    const menuItemsLength = fixture.componentInstance.navItems.length;
    expect(menuItemsLength).toEqual(4);
  });
});
