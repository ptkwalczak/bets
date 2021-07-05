import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav-component/sidenav.component';

const components = [SidenavComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class SidenavModule {}
