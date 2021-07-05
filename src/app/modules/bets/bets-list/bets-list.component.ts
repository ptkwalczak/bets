import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTE_PATHS } from '../../../routes';
import { Bet } from '../interfaces';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'app-bets-list',
  templateUrl: './bets-list.component.html',
  styleUrls: ['./bets-list.component.scss'],
})
export class BetsListComponent implements OnInit, OnDestroy {
  public bets: Bet[] = [];
  private subscription$: Subscription;
  constructor(private router: Router, private betService: BetService) {}

  ngOnInit(): void {
    this.getAllBets();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public navigateToDetails(event: Bet) {
    this.router.navigateByUrl(`${ROUTE_PATHS.bet}/${event.id.toString()}`);
  }

  private getAllBets() {
    this.subscription$ = this.betService.getBets().subscribe((bets: Bet[]) => {
      this.bets = bets;
    });
  }
}
