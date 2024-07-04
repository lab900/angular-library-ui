import { Component } from '@angular/core';
import { Lab900ActionButtonComponent, Lab900ButtonComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-button-example',
  styles: ['p {margin: 10px 0}'],
  standalone: true,
  imports: [Lab900ButtonComponent, Lab900ActionButtonComponent],
  template: `
    <p>Raised button</p>
    <lab900-button
      (btnClick)="log('Raised button')"
      color="primary"
      type="raised"
      label="hello world"
      suffixIcon="remove_red_eye"
    />
    <p>Raised button disabled</p>
    <lab900-button
      disabled="true"
      (btnClick)="log('Raised button disabled')"
      color="primary"
      type="raised"
      label="hello world"
      suffixIcon="remove_red_eye"
    />
    <p>Stroked button</p>
    <lab900-button
      (btnClick)="log('Stroked button')"
      color="primary"
      type="stroked"
      label="hello world"
      prefixIcon="edit"
    />
    <p>Stroked button disabled</p>
    <lab900-button
      (btnClick)="log('Stroked button disabled')"
      disabled="true"
      color="primary"
      type="stroked"
      label="hello world"
      prefixIcon="edit"
    />
    <p>Raised button color= accent</p>
    <lab900-button color="accent" type="raised" label="hello world" />
    <p>Icon button</p>
    <lab900-button type="icon" label="delete" (btnClick)="log('Icon button')" />
    <p>Fab icon button</p>
    <lab900-button
      type="fab"
      label="delete"
      (btnClick)="log(' Fab Icon button')"
    />
    <p>Fab-mini icon button</p>
    <lab900-button
      type="mini-fab"
      label="delete"
      (btnClick)="log('Fab Mini Icon button')"
    />
    <p>Toggle action button</p>
    <lab900-action-button [data]="[]" [action]="toggleActionButton" />
  `,
})
export class ButtonExampleComponent {
  public toggleActionButton = {
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
    ],
  };

  public log(message: string): void {
    console.log(message);
  }
}
