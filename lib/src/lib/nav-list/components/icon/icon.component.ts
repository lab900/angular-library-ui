import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Icon } from '../../models/nav-item.model';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lab900-icon',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <mat-icon *ngIf="icon?.name">{{ icon.name }}</mat-icon>
    <mat-icon *ngIf="icon?.svgName" [svgIcon]="icon.svgName"></mat-icon>`,
  imports: [MatIconModule, NgIf],
  standalone: true,
})
export class IconComponent {
  @Input()
  public icon: Icon;
}
