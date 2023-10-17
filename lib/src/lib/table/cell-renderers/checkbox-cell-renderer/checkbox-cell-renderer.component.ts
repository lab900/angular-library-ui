import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellRendererAbstract } from '../../directives/cell-renderer.abstract';
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
    [disabled]="options.disabled ?? false"
    [indeterminate]="options.indeterminate ?? false"
    [color]="options.theme ?? 'primary'"
    (change)="onValueChange($event.checked)"
  ></mat-checkbox>`,
})
export class CheckboxCellRendererComponent extends CellRendererAbstract<CheckboxCellRendererOptions> {
  public onValueChange(newValue: boolean): void {
    combineLatest([this.rendererOptions$, this.data$])
      .pipe(map(([options, data]) => options?.valueChange(newValue, data)))
      .subscribe();
  }
}
