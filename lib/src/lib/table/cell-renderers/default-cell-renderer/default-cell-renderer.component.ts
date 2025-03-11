import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-default-cell-renderer',
  imports: [TranslatePipe, MatTooltip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div
    class="lab900-cell-value"
    [matTooltip]="tooltip() | translate"
    [matTooltipPosition]="tooltipPosition()">
    {{ cellValueOrPlaceholder() | translate }}
  </div>`,
})
export class DefaultCellRendererComponent extends CellRendererAbstract {}
