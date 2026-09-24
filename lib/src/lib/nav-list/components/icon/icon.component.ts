import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../../models/nav-item.model';
import { MatIcon } from '@angular/material/icon';

/**
 * Shows an Icon config as a Material icon or a registered SVG icon
 */
@Component({
  selector: 'lab900-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` @if (icon().name) {
      <mat-icon>{{ icon().name }}</mat-icon>
    }
    @if (icon().svgName; as svgName) {
      <mat-icon [svgIcon]="svgName" />
    }`,
  imports: [MatIcon],
})
export class IconComponent {
  public readonly icon = input.required<Icon>();
}
