import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRightPanelComponent } from './header-right-panel.component';

describe('HeaderRightPanelComponent', () => {
  let component: HeaderRightPanelComponent;
  let fixture: ComponentFixture<HeaderRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRightPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
