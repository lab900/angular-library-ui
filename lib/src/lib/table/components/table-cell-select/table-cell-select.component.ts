import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  viewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { SelectableRows } from '../table/table.component';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'lab900-table-cell-select',
  templateUrl: './table-cell-select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule, MatCheckboxModule],
})
export class TableCellSelectComponent<T extends object = object>
  implements OnInit, OnDestroy
{
  private readonly table = inject(MatTable, { optional: true, skipSelf: true });

  public readonly rowCheckboxes = viewChildren<MatCheckbox>('rowCheckbox');

  public readonly selectAllCheckbox =
    viewChild<MatCheckbox>('selectAllCheckbox');

  private readonly columnDef = viewChild(MatColumnDef);

  public readonly showFooter = input<boolean>(false);
  public readonly selection = input.required<SelectionModel<T>>();
  public readonly allSelected = toSignal(
    toObservable(this.selection).pipe(
      switchMap((select) => select.changed),
      tap(console.log),
      map(
        (change) =>
          change?.source?.selected?.length === this.rowCheckboxes()?.length,
      ),
    ),
  );

  public readonly options = input.required<SelectableRows<T>>();
  public readonly color = computed(
    () => this.options()?.checkBoxColor ?? 'primary',
  );
  public readonly sticky = computed(() =>
    this.options()?.sticky ? this.options().position : undefined,
  );

  public readonly showSelectAll = computed(
    () => this.options()?.showSelectAllCheckbox ?? false,
  );
  public readonly disabled = computed(() => this.options()?.disabled ?? false);

  public readonly selectRow = output<T>();
  public readonly selectAll = output<boolean>();

  public ngOnInit(): void {
    if (this.table) {
      this.table.addColumnDef(this.columnDef());
    }
  }

  public ngOnDestroy(): void {
    if (this.table) {
      this.table.removeColumnDef(this.columnDef());
    }
  }

  public handleSelectAllCheckbox({ checked }): void {
    this.rowCheckboxes().forEach((checkBox) => (checkBox.checked = checked));
    this.selectAll.emit(checked);
  }

  public isChecked(value: T): boolean {
    return this.selection()?.isSelected(value);
  }

  public isDisabled(value: T): boolean {
    return this.isChecked(value) ? false : this.disabled();
  }
}
