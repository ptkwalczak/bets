import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retryWhen } from 'rxjs/operators';
import { OriginSpecificConfig } from '../../../config/app.config.origin';
import { RetryRequestStrategy } from '../../http/retry-request-strategy';
import { Bet } from '../interfaces';

@Injectable()
export class BetService {
  constructor(private http: HttpClient) {}
  private readonly betsApi = OriginSpecificConfig.getConfig().BETS_API;

  public getBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(`${this.betsApi}/bets`).pipe(
      retryWhen(
        RetryRequestStrategy.getRxPipe({
          maxRetryAttempts: 3,
          scalingDelayFactor: 5000,
          retryPredicate: () => true,
          onErrorCallback: () => {
            console.error('Unable to get Bets from the backend');
          },
        })
      ),

      catchError(this.handleError<Bet[]>(`getAllBets`))
    );
  }

  public getBetDetails(id: number): Observable<Bet> {
    const betIdUrl = `${this.betsApi}/bets/${id}`;

    return this.http
      .get<Bet>(betIdUrl)
      .pipe(catchError(this.handleError<Bet>(`getBet id=${id}`)));
  }

  // :TODO should be move to a seperate class whose sole responsability is to  handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
