import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OriginSpecificConfig } from '../../config/app.config.origin';
import { Bet } from '../bets/interfaces';
import { SocketIOEvent, WebsocketService } from './websocket-service';

@Injectable()
export class BetsPublisherService {
  private readonly wssUrl = OriginSpecificConfig.getConfig().BETS_WSS_API;
  private socketErrorStream$: Subject<any> = new Subject<any>();
  private betsStream$: Subject<Bet[]> = new Subject<Bet[]>();

  constructor(private websocketService: WebsocketService) {}

  public disableConnection() {
    this.websocketService.disconnect();
  }

  public getBetsStream(): Subject<Bet[]> {
    return this.betsStream$;
  }

  public initWsConnection() {
    this.websocketService.connect(this.wssUrl);
    this.subscribeToSocketEvents();
  }

  // TODO: add unsubscribing
  private subscribeToSocketEvents() {
    this.websocketService.on(SocketIOEvent.ERROR, (error: any) =>
      this.socketErrorStream$.next(error)
    );
    this.websocketService.on(SocketIOEvent.CONNECT, () => this.onConnect());
    this.websocketService.on(SocketIOEvent.DISCONNECT, (reason: string) =>
      this.onDisconnect(reason)
    );
    this.websocketService.on(SocketIOEvent.BET_UPDATED, (events: Bet[]) => {
      console.log('events.length: ', events.length);
      this.betsStream$.next(events);
    });
  }

  private onConnect() {
    console.log('got connected on ws');
  }

  private onDisconnect(reason: string) {
    console.log(`got diconnected on ws with ${reason}`);
  }
}
