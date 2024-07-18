import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellSelectEditorOptions } from './cell-select-editor.options';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [MatSelectModule, TranslateModule],
  template: `
    @if (editOptions()) {
      <mat-select
        #matSelect
        placeholder="{{ placeholder() | translate }}"
        [value]="cellValue()"
        (openedChange)="openChanged($event)"
        [compareWith]="editOptions()?.compareWithFn ?? defaultCompareFn"
        [multiple]="editOptions()?.multiple ?? false"
        [panelWidth]="editOptions()?.panelWidth ?? 'auto'"
        [class.disable-td-event]="matSelect.panelOpen"
        panelClass="lab900-table-select-editor-panel"
        class="lab900-table-select-editor"
      >
        <!-- fixes the select on tab -->
        <mat-option style="display: none" />
        @for (option of selectOptions(); track option) {
          <mat-option [value]="option">
            {{
              editOptions()?.optionLabelFn
                ? (editOptions().optionLabelFn(option) | translate)
                : option
            }}
          </mat-option>
        }
      </mat-select>
    }
  `,
})
export class CellSelectEditorComponent extends CellEditorAbstract<CellSelectEditorOptions> {
  public readonly selectOptions = computed(() => {
    const o = this.editOptions();
    if (o?.options) {
      if (typeof o.options === 'function') {
        return o.options(this.data());
      }
      return o.options;
    }
    return [];
  });

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
