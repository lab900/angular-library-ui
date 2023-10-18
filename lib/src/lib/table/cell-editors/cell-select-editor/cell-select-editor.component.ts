import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellSelectEditorOptions } from './cell-select-editor.options';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatSelectModule, A11yModule],
  template: `
    <mat-select
      *ngIf="editOptions$ | async as editOptions"
      cdkTrapFocus
      cdkTrapFocusAutoCapture
      [value]="cellValue$ | async"
      (selectionChange)="close($event.value)"
      (openedChange)="openChanged($event)"
      placeholder="{{ editOptions?.placeholder }}"
    >
      <mat-option *ngFor="let option of editOptions.options" [value]="option">
        {{
          editOptions?.optionLabelFn
            ? editOptions.optionLabelFn(option)
            : option
        }}
      </mat-option>
    </mat-select>
  `,
})
export class CellSelectEditorComponent
  extends CellEditorAbstract<CellSelectEditorOptions>
  implements AfterViewInit
{
  @ViewChild(MatSelect) private matSelect: MatSelect;

  public ngAfterViewInit(): void {
    this.matSelect.open();
  }

  public openChanged(open: boolean): void {
    if (!open) {
      this.close();
    }
  }
}
