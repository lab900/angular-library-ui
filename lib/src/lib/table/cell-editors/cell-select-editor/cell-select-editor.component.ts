import { ChangeDetectionStrategy, Component, computed, effect, viewChild, ViewEncapsulation } from '@angular/core';
import { MatOption, MatSelect } from '@angular/material/select';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellSelectEditorOptions } from './cell-select-editor.options';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-select-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [TranslatePipe, MatSelect, MatOption],
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
        class="lab900-table-select-editor">
        <!-- fixes the select on tab -->
        <mat-option style="display: none" />
        @for (option of selectOptions(); track option) {
          <mat-option [value]="option">
            {{ editOptions()?.optionLabelFn(option) ?? option | translate }}
          </mat-option>
        }
      </mat-select>
    }
  `,
})
export class CellSelectEditorComponent extends CellEditorAbstract<CellSelectEditorOptions> {
  private readonly matSelect = viewChild(MatSelect);
  public readonly selectOptions = computed(() => {
    const o = this.editOptions();
    const data = this.data();
    if (o?.options) {
      if (typeof o.options === 'function') {
        return o.options(data);
      }
      return o.options;
    }
    return [];
  });

  public constructor() {
    super();
    effect(() => {
      const matSelect = this.matSelect();
      if (matSelect && !matSelect.panelOpen) {
        matSelect.focus();
        matSelect.open();
      }
    });
  }

  public readonly defaultCompareFn = (a: unknown, b: unknown): boolean => a === b;

  public openChanged(open: boolean): void {
    if (!open) {
      this.closeAndSave(this.matSelect()?.value, false);
      // fixes the arrow keys navigation after close
      this.elm.nativeElement.parentElement?.parentElement?.parentElement?.focus();
      this.close();
    }
  }
}
