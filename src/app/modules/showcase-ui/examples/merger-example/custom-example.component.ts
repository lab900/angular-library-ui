import { Component } from '@angular/core';
import { CustomComponentAbstract } from '@lab900/ui';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lab900-custom-component-example',
  standalone: true,
  template: ` <div *ngIf="data">
    <p>{{ data.text }}</p>
  </div>`,
  imports: [NgIf],
})
export class CustomExampleComponent extends CustomComponentAbstract<any> {}
