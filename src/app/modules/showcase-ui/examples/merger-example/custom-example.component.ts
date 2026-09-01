import { Component, input } from '@angular/core';
import { MergerItemComponent } from '@lab900/ui';
import { MergerDataExample } from './models/merger-data-example.model';

@Component({
  selector: 'lab900-custom-component-example',
  template: `@if (data(); as data) {
    <div>
      <p>{{ data.text }}</p>
    </div>
  }`,
  imports: [],
})
export class CustomExampleComponent implements MergerItemComponent<MergerDataExample> {
  public readonly data = input<MergerDataExample>();
}
