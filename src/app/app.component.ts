import { Component } from '@angular/core';
import { ICONS } from '../assets/icons';
import { MenuItem } from './modules/tiles/intefaces';
import { ROUTE_PATHS } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = `Let's bet`;
  navItems: MenuItem[] = [
    {
      title: ROUTE_PATHS.homepage,
      icon: ICONS.homepage,
    },
    {
      title: ROUTE_PATHS.bets,
      icon: ICONS.bets,
    },
    {
      title: ROUTE_PATHS.websocket,
      icon: ICONS.search,
    },
    {
      title: ROUTE_PATHS.settings,
      icon: ICONS.settings,
    },
  ];
}
