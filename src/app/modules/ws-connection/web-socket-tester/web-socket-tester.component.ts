import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OriginSpecificConfig } from '../../../config/app.config.origin';
import { Bet } from '../../bets/interfaces';
import { BetsPublisherService } from '../bets-publisher.service';

@Component({
  selector: 'app-web-socket-tester',
  templateUrl: './web-socket-tester.component.html',
  styleUrls: ['./web-socket-tester.component.scss'],
})
export class WebSocketTesterComponent implements OnInit {
  private readonly betsApi = OriginSpecificConfig.getConfig().BETS_API;
  // this should be moved to config
  private readonly startPullingPathOneEventPerSec = '/pulling/start/?rate=1';
  private readonly stopPullingPath = '/pulling/stop';
  public updatedBetsStream$: Subject<Bet[]>;
  public newUpdatesCount = 0;
  private betsSubscription: Subscription;
  constructor(
    private betsPublisherService: BetsPublisherService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  public startPulling() {
    this.betsSubscription = this.http
      .get(`${this.betsApi}${this.startPullingPathOneEventPerSec}`)
      .pipe(
        mergeMap((res: any) => {
          if (res.ok) {
            this.betsPublisherService.initWsConnection();
            return this.betsPublisherService.getBetsStream();
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe((bets) => {
        if (bets.length) {
          this.newUpdatesCount += bets.length;
        }
      });
  }

  public stopPulling() {
    this.betsPublisherService.disableConnection();
    this.http.get(`${this.betsApi}${this.stopPullingPath}`);
    this.betsSubscription.unsubscribe();
  }
}
