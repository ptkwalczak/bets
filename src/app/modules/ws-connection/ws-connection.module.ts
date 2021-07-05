import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BetsPublisherService } from './bets-publisher.service';
import { WebSocketTesterComponent } from './web-socket-tester/web-socket-tester.component';
import { WebsocketService } from './websocket-service';

const services = [WebsocketService, BetsPublisherService];
const components = [WebSocketTesterComponent];

@NgModule({
  declarations: [WebSocketTesterComponent],
  providers: [...services],
  imports: [CommonModule],
  exports: [...components],
})
export class WsConnectionModule {}
