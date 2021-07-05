import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../routes';
import { MenuItem } from '../../tiles/intefaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() menuItems: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateTo(item: MenuItem) {
    if (this.isValidRoute(item.title)) {
      this.router.navigateByUrl(item.title);
    }
  }

  private isValidRoute(route) {
    return Object.values(ROUTE_PATHS).includes(route);
  }
}
