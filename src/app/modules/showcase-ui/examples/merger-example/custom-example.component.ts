import { Component, Input } from '@angular/core';
import { MergerItemComponent } from '@lab900/ui';
import { MergerDataExample } from './models/merger-data-example.model';

@Component({
  selector: 'lab900-custom-component-example',
  standalone: true,
  template: ` @if (data) {
    <div>
      <p>{{ data.text }}</p>
    </div>
  }`,
  imports: [],
})
export class CustomExampleComponent implements MergerItemComponent<MergerDataExample> {
  @Input()
  public data?: MergerDataExample;
}
