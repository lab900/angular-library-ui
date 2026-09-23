import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { Alert } from '../../models/alert';
import { LowerCasePipe } from '@angular/common';

/**
 * A colored message box. The content is projected, for example
 * `<lab900-alert [type]="Alert.Warn">Unsaved changes</lab900-alert>`.
 */
@Component({
  selector: 'lab900-alert',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [LowerCasePipe],
  template: `<div class="alert alert-{{ type() | lowercase }}">
    <ng-content></ng-content>
  </div> `,
})
export class AlertComponent {
  /** Sets the color and the meaning of the alert */
  public readonly type = input<Alert>(Alert.Info);
}
