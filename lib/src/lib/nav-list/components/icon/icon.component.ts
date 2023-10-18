import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Icon } from '../../models/nav-item.model';

@Component({
  selector: 'lab900-icon',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mat-icon *ngIf="icon?.name">{{ icon.name }}</mat-icon>
    <mat-icon *ngIf="icon?.svgName" [svgIcon]="icon.svgName"></mat-icon>`,
})
export class IconComponent {
  @Input()
  public icon: Icon;
}
