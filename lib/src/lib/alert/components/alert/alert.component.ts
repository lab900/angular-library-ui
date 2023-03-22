import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';

@Component({
  selector: 'lab900-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input()
  public type: Alert = Alert.Info;

  public readonly Info = Alert.Info;
  public readonly Warn = Alert.Warn;
  public readonly Error = Alert.Error;
  public readonly Success = Alert.Success;
}
