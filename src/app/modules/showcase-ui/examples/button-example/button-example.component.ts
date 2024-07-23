import { Component } from '@angular/core';
import { Lab900ButtonModule, ToggleActionButton } from '@lab900/ui';

@Component({
  selector: 'lab900-button-example',
  styles: ['p {margin: 10px 0}'],
  standalone: true,
  imports: [Lab900ButtonModule],
  template: `
    <p>Flat button</p>
    <lab900-button
      disabled="true"
      (btnClick)="log('wuut')"
      color="primary"
      type="flat"
      label="hello world"
      suffixIcon="remove_red_eye"
    ></lab900-button>
    <p>Flat button</p>
    <lab900-button
      color="primary"
      type="stroked"
      label="hello world"
      prefixIcon="edit"
    ></lab900-button>
    <p>Raised button</p>
    <lab900-button
      color="accent"
      type="raised"
      label="hello world"
    ></lab900-button>
    <p>Icon button</p>
    <lab900-button type="icon" label="delete"></lab900-button>
    <p>Fab icon button</p>
    <lab900-button type="fab" label="delete"></lab900-button>
    <p>Fab-mini icon button</p>
    <lab900-button type="mini-fab" label="delete"></lab900-button>
    <p>Toggle action button</p>
    <lab900-action-button
      [data]="[]"
      [action]="toggleActionButton"
    ></lab900-action-button>
  `,
})
export class ButtonExampleComponent {
  public toggleActionButton: ToggleActionButton = {
    label: 'EntityDetailSectionToggleToggleButton',
    type: 'toggle',
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
      {
        label: 'Button 3',
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
