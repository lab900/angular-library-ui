import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxCellRendererOptions } from './checkbox-cell-renderer.options';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-checkbox-cell-renderer',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<mat-checkbox
    *ngIf="rendererOptions$ | async as options"
    [matTooltip]="tooltip$ | async"
    [matTooltipPosition]="tooltipPosition$ | async"
    [checked]="cellValue$ | async"
    [disabled]="disabled$ | async"
    [indeterminate]="options.indeterminate ?? false"
    [color]="options.theme ?? 'primary'"
    (change)="onValueChange($event.checked)"
  ></mat-checkbox>`,
})
export class CheckboxCellRendererComponent extends CellRendererAbstract<CheckboxCellRendererOptions> {
  public readonly disabled$ = combineLatest([
    this.columnConfig$,
    this.data$,
  ]).pipe(
    map(
      ([config, data]) => config?.cellEditorOptions?.disabled?.(data) ?? false
    )
  );
  public onValueChange(newValue: boolean): void {
    combineLatest([this.columnConfig$, this.data$])
      .pipe(
        map(([config, data]) =>
          config?.cellEditorOptions?.valueChanged(newValue, config.key, data)
        )
      )
      .subscribe();
  }
}
