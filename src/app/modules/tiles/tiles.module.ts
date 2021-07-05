import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TileComponent } from './tile-component/tile.component';
import { TilesListComponent } from './tiles-list-component/tiles-list.component';

const components = [TilesListComponent, TileComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class TilesModule {}
