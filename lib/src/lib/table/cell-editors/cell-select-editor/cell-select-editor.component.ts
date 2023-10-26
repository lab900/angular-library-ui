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
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { SelectAutoOpenDirective } from '../../directives/select-auto-open.directive';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
    SelectAutoOpenDirective,
  ],
  template: `
    <mat-select
      [tabindex]="-2"
      *ngIf="editOptions$ | async as editOptions"
      placeholder="{{ (placeholder$ | async) ?? '' | translate }}"
      [value]="cellValue$ | async"
      (selectionChange)="close($event.value)"
      (openedChange)="openChanged($event)"
      [compareWith]="editOptions?.compareWithFn ?? defaultCompareFn"
      [multiple]="editOptions?.multiple ?? false"
      [panelWidth]="editOptions?.panelWidth ?? 'auto'"
      class="lab900-table-select-editor"
      lab900SelectAutoOpen
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
    })
  );

  @ViewChild(MatSelect)
  private matSelect?: MatSelect;

  public readonly defaultCompareFn = (a: any, b: any): boolean => a === b;

  protected focusAfterViewInit(): void {
    this.matSelect?.focus();
  }

  public openChanged(open: boolean): void {
    if (!open) {
      this.close();
    }
  }
}
