import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ColumnHeaderRendererAbstract } from '../column-header-renderer-abstract.directive';
import { ColumnHeaderSortingComponent } from '../column-header-sorting/column-header-sorting.component';
import { ColumnHeaderWithIconRendererOptions } from './column-header-with-icon-renderer.options';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lab900-default-column-header-renderer',
  standalone: true,
  imports: [AsyncPipe, ColumnHeaderSortingComponent, NgIf, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="lab900-column-header lab900-column-header--with-icon"
      *ngIf="rendererOptions$ | async as options"
    >
      <mat-icon *ngIf="!options.svgIcon">{{ options.icon }}</mat-icon>
      <mat-icon *ngIf="options.svgIcon" [svgIcon]="options.icon"></mat-icon>
      {{ columnLabel$ | async }}
      <lab900-column-header-sorting
        *ngIf="!disableSort"
        [columnConfig]="columnConfig$ | async"
      ></lab900-column-header-sorting>
    </div>
  `,
  styles: [
    `
      .lab900-column-header {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class ColumnHeaderWithIconRendererComponent extends ColumnHeaderRendererAbstract<ColumnHeaderWithIconRendererOptions> {}
