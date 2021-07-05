import { Observable, of } from 'rxjs';
import { Bet } from '../interfaces';

export const testBet = {
  id: 49,
  teams: [],
  draw: 7.53,
};

export class BetServiceStub {
  public getBets(): Observable<Bet[]> {
    return of([testBet]);
  }

  public getBetDetails(id: number): Observable<Bet> {
    return of(testBet);
  }
}
