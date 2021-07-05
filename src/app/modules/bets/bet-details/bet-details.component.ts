import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bet } from '../interfaces';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'app-bet-details',
  templateUrl: './bet-details.component.html',
  styleUrls: ['./bet-details.component.scss'],
})
export class BetDetailsComponent implements OnInit {
  public bet$: Observable<Bet>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private betService: BetService
  ) {}

  ngOnInit(): void {
    this.getBetDetails();
  }

  private getBetDetails(): void {
    // tslint:disable-next-line:no-non-null-assertion
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);
    this.bet$ = this.betService.getBetDetails(id);
  }
}
