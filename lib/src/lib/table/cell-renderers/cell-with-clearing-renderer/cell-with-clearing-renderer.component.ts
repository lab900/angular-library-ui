import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CellWithClearingRendererOptions } from './cell-with-clearing-renderer.options';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { CellRendererAbstract } from '../cell-renderer.abstract';

@Component({
  selector: 'lab900-cell-with-clearing-renderer',
  imports: [MatIconModule, MatTooltipModule, TranslateModule, MatButtonModule],
  templateUrl: './cell-with-clearing-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .lab900-cell-value--with-icon {
        display: flex;
        align-items: center;
      }

      .lab900-cell-value--with-icon button {
        padding: 0 !important;
        width: 36px !important;
        height: 36px !important;
      }
    `,
  ],
})
export class CellWithClearingRendererComponent<T = any> extends CellRendererAbstract<
  CellWithClearingRendererOptions,
  T
> {
  public readonly tooltipWithHtml = computed(() => this.tooltip()?.replace(/<[^>]*>/g, ''));
  public readonly canClear = computed(() => this.hasCellValue() && !this.disabled());

  public handleClear(event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    const valueChanged = this.handleValueChanged();
    if (!valueChanged) {
      throw Error(`No handleValueChanged method provided for column ${this.columnConfig().key}`);
    }
    valueChanged(null, this.columnConfig(), this.data());
  }
}
