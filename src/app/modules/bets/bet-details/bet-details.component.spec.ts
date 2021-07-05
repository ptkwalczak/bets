import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BetService } from '../services/bet.service';
import { BetServiceStub, testBet } from '../services/bet.service.stub';
import { BetDetailsComponent } from './bet-details.component';

describe('BetDetailsComponent', () => {
  let component: BetDetailsComponent;
  let fixture: ComponentFixture<BetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BetDetailsComponent],
      providers: [{ provide: BetService, useClass: BetServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an id', () => {
    const id = fixture.nativeElement.querySelector('.bet-id');
    expect(id.innerHTML.indexOf(testBet.id)).toBeGreaterThan(-1);
  });
});
