import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../../../assets/icons';
import { Tile } from '../intefaces';

@Component({
  selector: 'app-tiles-list-component',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.scss'],
})
export class TilesListComponent implements OnInit {
  tiles: Tile[] = [
    {
      iconUrl: ICONS.bets,
      title: 'BETS',
      description: 'See the list of bets',
    },
    {
      iconUrl: ICONS.search,
      title: 'WEBSOCKET',
      description: 'Test websocket module',
    },
    {
      iconUrl: ICONS.settings,
      title: 'SETTINGS',
      description: 'Change settings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
