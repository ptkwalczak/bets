import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header-component/header.component';
import { HeaderRightPanelComponent } from './header-right-panel-component/header-right-panel.component';

const components = [
  HeaderComponent,
  HeaderRightPanelComponent
];

@NgModule({
  declarations: [...components],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class HeaderModule {}
