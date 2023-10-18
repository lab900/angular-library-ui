import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Alert } from '../../models/alert';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lab900-alert',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass],
  template: `<div
    [ngClass]="{
      'alert-info': type === Info,
      'alert-warn': type === Warn,
      'alert-error': type === Error,
      'alert-success': type === Success
    }"
    class="alert"
  >
    <ng-content></ng-content>
  </div> `,
})
export class AlertComponent {
  @Input()
  public type: Alert = Alert.Info;

  public readonly Info = Alert.Info;
  public readonly Warn = Alert.Warn;
  public readonly Error = Alert.Error;
  public readonly Success = Alert.Success;
}
