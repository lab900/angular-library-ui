import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ColumnHeaderRendererAbstract } from '../column-header-renderer-abstract.directive';
import { ColumnHeaderSortingComponent } from '../column-header-sorting/column-header-sorting.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-default-column-header-renderer',
  standalone: true,
  imports: [AsyncPipe, ColumnHeaderSortingComponent, NgIf, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div class="lab900-column-header">
    {{ columnLabel$ | async | translate }}
    <lab900-column-header-sorting
      *ngIf="!disableSort"
      [columnConfig]="columnConfig$ | async"
    ></lab900-column-header-sorting>
  </div>`,
  styles: [
    `
      .lab900-column-header {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class DefaultColumnHeaderRendererComponent extends ColumnHeaderRendererAbstract {}
