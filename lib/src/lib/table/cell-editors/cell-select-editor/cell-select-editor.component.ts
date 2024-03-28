import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellSelectEditorOptions } from './cell-select-editor.options';
import { TranslateModule } from '@ngx-translate/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatSelectModule, TranslateModule],
  template: `
    <mat-select
      *ngIf="editOptions$ | async as editOptions"
      #matSelect
      placeholder="{{ (placeholder$ | async) ?? '' | translate }}"
      [value]="cellValue$ | async"
      (openedChange)="openChanged($event)"
      [compareWith]="editOptions?.compareWithFn ?? defaultCompareFn"
      [multiple]="editOptions?.multiple ?? false"
      [panelWidth]="editOptions?.panelWidth ?? 'auto'"
      [class.disable-td-event]="matSelect.panelOpen"
      panelClass="lab900-table-select-editor-panel"
      class="lab900-table-select-editor"
    >
      <!-- fixes the select on tab -->
      <mat-option style="display: none" />
      <mat-option
        *ngFor="let option of selectOptions$ | async"
        [value]="option"
      >
        {{
          editOptions?.optionLabelFn
            ? (editOptions.optionLabelFn(option) | translate)
            : option
        }}
      </mat-option>
    </mat-select>
  `,
})
export class CellSelectEditorComponent extends CellEditorAbstract<CellSelectEditorOptions> {
  public selectOptions$: Observable<any[]> = combineLatest([
    this.editOptions$,
    this.data$,
  ]).pipe(
    map(([o, data]) => {
      if (o?.options) {
        if (typeof o.options === 'function') {
          return o.options(data);
        }
        return o.options;
      }
      return [];
    }),
    distinctUntilChanged()
  );

  private _matSelect?: MatSelect;

  @ViewChild(MatSelect)
  private set matSelect(value: MatSelect) {
    this._matSelect = value;
    setTimeout(() => {
      if (this._matSelect && !this._matSelect.panelOpen) {
        this._matSelect.focus();
        this._matSelect.open();
      }
    });
  }

  private get matSelect(): MatSelect {
    return this._matSelect;
  }

  public readonly defaultCompareFn = (a: unknown, b: unknown): boolean =>
    a === b;

  public openChanged(open: boolean): void {
    if (!open) {
      this.closeAndSave(this.matSelect.value, false);
      // fixes the arrow keys navigation after close
      this.elm.nativeElement.parentElement?.parentElement?.parentElement?.focus();
    }
  }
}
