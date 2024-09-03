import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-default-cell-renderer',
  standalone: true,
  imports: [TranslateModule, MatTooltipModule],
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
