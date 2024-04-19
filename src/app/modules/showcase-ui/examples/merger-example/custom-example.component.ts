import { Component } from '@angular/core';
import { CustomComponentAbstract } from '@lab900/ui';

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
export class CustomExampleComponent extends CustomComponentAbstract<any> {}
