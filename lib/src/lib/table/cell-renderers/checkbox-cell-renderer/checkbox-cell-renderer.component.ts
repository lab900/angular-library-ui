import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatCheckbox } from '@angular/material/checkbox';
import { CheckboxCellRendererOptions } from './checkbox-cell-renderer.options';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-checkbox-cell-renderer',
  imports: [TranslatePipe, MatCheckbox, MatTooltip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <mat-checkbox
      [matTooltip]="tooltip() | translate"
      [matTooltipPosition]="tooltipPosition()"
      [checked]="cellValue()"
      [disabled]="disabled()"
      [indeterminate]="renderOptions()?.indeterminate ?? false"
      [color]="renderOptions()?.theme ?? 'primary'"
      (change)="onValueChange($event.checked)"
      (click)="$event.stopImmediatePropagation()" />
  `,
})
export class CheckboxCellRendererComponent extends CellRendererAbstract<CheckboxCellRendererOptions> {
  public readonly disabled = computed(() => this.columnConfig()?.cellEditorOptions?.disabled?.(this.data()) ?? false);

  public onValueChange(newValue: boolean): void {
    const valueChanged = this.handleValueChanged();
    if (!valueChanged) {
      throw Error(`No handleValueChanged method provided for column ${this.columnConfig().key}`);
    }
    valueChanged(newValue, this.columnConfig(), this.data());
  }
}
