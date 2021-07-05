import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TileComponent } from './tile.component';

describe('TileComponentComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  const locators = {
    icon: '.icon',
    description: '.description',
    arrow: '.arrow',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = {
      iconUrl: 'testUrl',
      title: 'testTitle',
      description: 'testDescription',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an icon', () => {
    const icon = fixture.debugElement.query(By.css(locators.icon));
    expect(icon).toBeDefined();
  });

  it('should contain a description', () => {
    const description = fixture.debugElement.query(
      By.css(locators.description)
    );
    expect(description).toBeDefined();
  });

  it('should contain an arrow element', () => {
    const arrow = fixture.debugElement.query(By.css(locators.arrow));
    expect(arrow).toBeDefined();
  });
});
