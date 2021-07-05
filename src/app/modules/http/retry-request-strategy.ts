import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface RetryStrategyParams {
  maxRetryAttempts?: number;
  scalingDelayFactor?: number;
  retryPredicate?: (resp: { status: string }) => boolean;
  customError?: any;
  onErrorCallback?: (error) => void;
}

export class RetryRequestStrategy {
  static defaultParams: RetryStrategyParams = {
    maxRetryAttempts: 3,
    scalingDelayFactor: 500,
    retryPredicate: RetryRequestStrategy.defaultRetryPredicate,
    customError: undefined,
    onErrorCallback: undefined,
  };

  static getRxPipe(
    params: RetryStrategyParams
  ): (attempts: Observable<any>) => Observable<any> {
    params = RetryRequestStrategy.getParams(params);
    return (attempts: Observable<any>) =>
      attempts.pipe(
        mergeMap((error, i) => {
          const retryAttempt = i + 1;
          // if maximum number of retries have been met
          // or response is a status code we don't wish to retry, throw error
          if (
            retryAttempt > params.maxRetryAttempts ||
            !params.retryPredicate(error)
          ) {
            if (params.onErrorCallback) {
              params.onErrorCallback(error);
            }
            if (params.customError) {
              return throwError(params.customError);
            }
            return throwError(error);
          }
          // retry after 1s, 2s, etc...
          return timer(retryAttempt * params.scalingDelayFactor);
        })
      );
  }

  private static getParams(
    paramsProvided: RetryStrategyParams
  ): RetryStrategyParams {
    return Object.assign(
      {},
      RetryRequestStrategy.defaultParams,
      paramsProvided
    );
  }

  private static defaultRetryPredicate(e) {
    return !e.status || e.status.toString().startsWith('5');
  }
}
