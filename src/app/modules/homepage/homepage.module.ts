import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FeedbackModule } from '../feedback/feedback.module';
import { TilesModule } from '../tiles/tiles.module';
import { HomepageComponent } from './homepage-component/homepage.component';

const components = [HomepageComponent];

@NgModule({
  declarations: [...components],
  imports: [TilesModule, FeedbackModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class HomepageModule {}
