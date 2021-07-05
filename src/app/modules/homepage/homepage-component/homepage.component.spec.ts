import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a tiles list', () => {
    const tilesList = fixture.debugElement.query(
      By.css('app-tiles-list-component')
    );
    expect(tilesList).toBeTruthy();
  });

  it('should display a feedback control', () => {
    const feedbackControl = fixture.debugElement.query(By.css('app-feedback'));
    expect(feedbackControl).toBeTruthy();
  });
});
