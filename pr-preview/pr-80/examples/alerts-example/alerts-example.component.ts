import { Component } from '@angular/core';
import { Alert, AlertComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-alerts-example',
  imports: [AlertComponent],
  styles: ['.alerts { display: flex; flex-direction: column; gap: 16px; }'],
  template: `
    <div class="alerts">
      <lab900-alert [type]="Alert.Error">Something went wrong while saving.</lab900-alert>
      <lab900-alert [type]="Alert.Warn">You have unsaved changes.</lab900-alert>
      <lab900-alert [type]="Alert.Success">Your changes are saved.</lab900-alert>
      <lab900-alert [type]="Alert.Info">This page refreshes every 5 minutes.</lab900-alert>
    </div>
  `,
})
export class AlertsExampleComponent {
  protected readonly Alert = Alert;
}
