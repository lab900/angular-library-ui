import { Component } from '@angular/core';
import {
  Lab900ActionButtonComponent,
  Lab900ActionButtonMenuComponent,
  Lab900ButtonComponent,
} from '@lab900/ui';

@Component({
  selector: 'lab900-button-example',
  styles: ['p {margin: 10px 0}'],
  standalone: true,
  imports: [
    Lab900ButtonComponent,
    Lab900ActionButtonComponent,
    Lab900ActionButtonMenuComponent,
  ],
  template: `
    <p>Flat button</p>
    <lab900-button
      disabled="false"
      (btnClick)="log('wuut')"
      color="primary"
      type="flat"
      label="hello world"
      suffixIcon="remove_red_eye"
    />
    <p>Flat button</p>
    <lab900-button
      color="primary"
      type="stroked"
      label="hello world"
      prefixIcon="edit"
      (btnClick)="log('throtel test')"
    />
    <p>Raised button</p>
    <lab900-button
      color="accent"
      type="raised"
      label="hello world"
      (btnClick)="log('Raised test')"
    />
    <p>Icon button</p>
    <lab900-button type="icon" label="delete" (btnClick)="log('Icon test')" />
    <p>Fab icon button</p>
    <lab900-button
      type="fab"
      label="delete"
      (btnClick)="log('Fab icon test')"
    />
    <p>Fab-mini icon button</p>
    <lab900-button
      type="mini-fab"
      label="delete"
      (btnClick)="log('Fab-mini icon test')"
    />
    <p>Toggle action button</p>
    <lab900-action-button [data]="[]" [action]="toggleActionButton" />
  `,
})
export class ButtonExampleComponent {
  public toggleActionButton = {
    label: 'EntityDetailSectionToggleToggleButton',
    type: 'toggle' as
      | 'toggle'
      | 'raised'
      | 'stroked'
      | 'flat'
      | 'icon'
      | 'fab'
      | 'mini-fab',
    subActions: [
      {
        label: 'Button 1',
        selected: true,
        action: () => {
          console.log('Button 1 is selected');
        },
      },
      {
        label: 'Button 2',
        selected: false,
        action: () => {
          console.log('Button 2 is selected');
        },
      },
    ],
  };
  public log(message: string): void {
    console.log(message);
  }
}
