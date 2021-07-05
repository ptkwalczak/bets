import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
export enum SocketIOEvent {
  ERROR = 'error',
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  BET_UPDATED = 'bet-updated',
}

@Injectable()
export class WebsocketService {
  private socket: io.Socket;

  constructor() {}

  public connect(endpoint: string, options?: io.ConnectOpt): void {
    this.socket = io(endpoint, options);
  }

  public on(event: any, fn: (message: any) => void): any {
    this.socket.on(event, fn);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
