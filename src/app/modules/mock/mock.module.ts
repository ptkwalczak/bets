
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from './mock.component';

const components = [ MockComponent ];

@NgModule({
  declarations: [...components],
  imports: [ReactiveFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
})
export class MockModule {}
