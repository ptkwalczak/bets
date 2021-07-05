import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { BetDetailsComponent } from './modules/bets/bet-details/bet-details.component';
import { BetsListComponent } from './modules/bets/bets-list/bets-list.component';
import { HomepageComponent } from './modules/homepage/homepage-component/homepage.component';
import { LoginComponent } from './modules/login/login.component';
import { MockComponent } from './modules/mock/mock.component';
import { WebSocketTesterComponent } from './modules/ws-connection/web-socket-tester/web-socket-tester.component';
import { ROUTE_PATHS } from './routes';

const routes: Routes = [
  { path: '', redirectTo: ROUTE_PATHS.homepage, pathMatch: 'full' },
  {
    path: ROUTE_PATHS.bets,
    component: BetsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTE_PATHS.homepage,
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTE_PATHS.websocket,
    component: WebSocketTesterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTE_PATHS.settings,
    component: MockComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTE_PATHS.feedback,
    component: MockComponent,
    canActivate: [AuthGuard],
  },
  { path: ROUTE_PATHS.login, component: LoginComponent },
  {
    path: `${ROUTE_PATHS.bet}/:id`,
    component: BetDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
