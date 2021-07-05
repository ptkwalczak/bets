import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BetDetailsComponent } from './bet-details/bet-details.component';
import { BetsListComponent } from './bets-list/bets-list.component';
import { BetService } from './services/bet.service';

const components = [BetsListComponent, BetDetailsComponent];

@NgModule({
  declarations: [...components],
  providers: [BetService],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class BetsModule {}
