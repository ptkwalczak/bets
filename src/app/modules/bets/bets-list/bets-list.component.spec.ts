import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BetService } from '../services/bet.service';
import { BetServiceStub } from '../services/bet.service.stub';
import { BetsListComponent } from './bets-list.component';


describe('BetsListComponent', () => {
  let component: BetsListComponent;
  let fixture: ComponentFixture<BetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BetsListComponent],
      providers: [{ provide: BetService, useClass: BetServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
