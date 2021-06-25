import { Component } from '@angular/core';
import { CustomComponentAbstract } from '@lab900/ui';
import { MergerDataExample } from './models/merger-data-example.model';

@Component({
  selector: 'lab900-custom-component-example',
  template: `<div *ngIf="data">
    <p>{{ data.text }}</p>
  </div>`,
})
export class CustomExampleComponent extends CustomComponentAbstract<MergerDataExample> {}
