import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tile } from '../intefaces';

@Component({
  selector: 'app-tile-component',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateTo() {
    this.router.navigateByUrl(this.tile.title.toLowerCase());
  }
}
