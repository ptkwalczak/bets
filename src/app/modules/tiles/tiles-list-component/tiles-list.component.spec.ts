import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICONS } from '../../../../assets/icons';
import { TilesListComponent } from './tiles-list.component';

describe('TilesViewComponentComponent', () => {
  let component: TilesListComponent;
  let fixture: ComponentFixture<TilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TilesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesListComponent);
    component = fixture.componentInstance;
    component.tiles = [
      {
        iconUrl: ICONS.bets,
        title: 'BETS',
        description: 'See the list of bets',
      },
      {
        iconUrl: ICONS.search,
        title: 'SEARCH',
        description: 'Find a bet',
      },
      {
        iconUrl: ICONS.settings,
        title: 'SETTINGS',
        description: 'Change settings',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain links to subpages', () => {
    const links = fixture.debugElement.queryAll(By.css('app-tile-component'));
    expect(links.length).toEqual(3);
  });
});
