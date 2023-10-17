import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellRendererAbstract } from '../../directives/cell-renderer.abstract';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-default-cell-renderer',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, TranslateModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div
    class="lab900-cell-value"
    [matTooltip]="tooltip$ | async"
    [matTooltipPosition]="tooltipPosition$ | async"
  >
    {{ cellValue$ | async }}
  </div>`,
})
export class DefaultCellRendererComponent extends CellRendererAbstract {}
