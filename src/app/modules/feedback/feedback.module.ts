
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback.component';

const components = [
  FeedbackComponent
];

@NgModule({
  declarations: [...components],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class FeedbackModule {}
