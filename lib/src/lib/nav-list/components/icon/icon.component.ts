import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Icon } from '../../models/nav-item.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lab900-icon',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` @if (icon?.name) {
      <mat-icon>{{ icon.name }}</mat-icon>
    }
    @if (icon?.svgName) {
      <mat-icon [svgIcon]="icon.svgName"></mat-icon>
    }`,
  imports: [MatIconModule],
  standalone: true,
})
export class IconComponent {
  @Input()
  public icon: Icon;
}
