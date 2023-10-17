import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellRendererAbstract } from '../../directives/cell-renderer.abstract';

@Component({
  selector: 'lab900-default-cell-renderer',
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div class="lab900-cell-value">
    {{ cellValue$ | async }}
  </div>`,
})
export class DefaultCellRendererComponent extends CellRendererAbstract {}
