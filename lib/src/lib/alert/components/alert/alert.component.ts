import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { Alert } from '../../models/alert';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'lab900-alert',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [LowerCasePipe],
  template: `<div class="alert alert-{{ type() | lowercase }}">
    <ng-content></ng-content>
  </div> `,
})
export class AlertComponent {
  public readonly type = input<Alert>(Alert.Info);
}
