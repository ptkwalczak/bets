import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTE_PATHS } from '../../../routes';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SidenavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    component.menuItems = [
      {
        title: ROUTE_PATHS.homepage,
        icon: 'test-icon',
      },
      {
        title: ROUTE_PATHS.bets,
        icon: 'test-icon',
      },
      {
        title: ROUTE_PATHS.websocket,
        icon: 'test-icon',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain links to subpages', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toEqual(3);
  });

  it('should navigate to a subpage upon an item click', () => {
    const navigateSpy = spyOn(component, 'navigateTo').and.callFake(() => {});
    const links = fixture.debugElement.queryAll(By.css('a'));
    links[0].nativeElement.click();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
