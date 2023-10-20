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
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatSelectModule, A11yModule, TranslateModule],
  template: `
    <mat-select
      *ngIf="editOptions$ | async as editOptions"
      cdkTrapFocus
      cdkTrapFocusAutoCapture
      placeholder="{{ (placeholder$ | async) ?? '' | translate }}"
      [value]="cellValue$ | async"
      (selectionChange)="close($event.value)"
      (openedChange)="openChanged($event)"
      [compareWith]="editOptions?.compareWithFn ?? defaultCompareFn"
      [multiple]="editOptions?.multiple ?? false"
      [panelWidth]="editOptions?.panelWidth ?? 'auto'"
      class="lab900-table-select-editor"
    >
      <mat-option *ngFor="let option of editOptions.options" [value]="option">
        {{
          editOptions?.optionLabelFn
            ? (editOptions.optionLabelFn(option) | translate)
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
  @ViewChild(MatSelect)
  private matSelect?: MatSelect;

  public readonly defaultCompareFn = (a: any, b: any): boolean => a === b;

  public ngAfterViewInit(): void {
    this.matSelect?.open();
  }

  public openChanged(open: boolean): void {
    if (!open) {
      this.close();
    }
  }
}
