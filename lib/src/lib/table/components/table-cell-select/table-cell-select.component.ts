import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SelectableRows } from '../table/table.component';
import { ThemePalette } from '@angular/material/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lab900-table-cell-select',
  templateUrl: './table-cell-select.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [MatTableModule, MatCheckboxModule, AsyncPipe, NgIf],
})
export class TableCellSelectComponent<T extends object = object>
  implements OnInit, OnDestroy
{
  @ViewChildren('rowCheckbox')
  public rowCheckboxes!: QueryList<MatCheckbox>;

  @ViewChild('selectAllCheckbox')
  public selectAllCheckbox!: MatCheckbox;

  @ViewChild(MatColumnDef, { static: true })
  private columnDef!: MatColumnDef;

  private readonly _options$ = new ReplaySubject<SelectableRows<T>>();
  public color?: ThemePalette;
  public sticky?: 'left' | 'right';
  public showSelectAll?: boolean;
  public disabled?: boolean;

  private _selection: SelectionModel<T>;
  public allSelected$: Observable<boolean>;

  @Input({ required: true })
  public set selection(value: SelectionModel<T>) {
    this._selection = value;
    this.allSelected$ = this._selection.changed.pipe(
      map(
        (change) =>
          change?.source?.selected?.length === this.rowCheckboxes?.length
      )
    );
  }

  @Input({ required: true })
  public set options(value: SelectableRows<T>) {
    this._options$.next(value);
    this.color = value?.checkBoxColor ?? 'primary';
    this.sticky = value?.sticky ? value.position : undefined;
    this.showSelectAll = value?.showSelectAllCheckbox ?? false;
    this.disabled = value?.disabled ?? false;
  }

  @Input()
  public showFooter?: boolean;

  @Output()
  public readonly selectRow = new EventEmitter<T>();

  @Output()
  private readonly selectAll = new EventEmitter<boolean>();

  public constructor(@Optional() @SkipSelf() public table: MatTable<any>) {}

  public ngOnInit(): void {
    this.columnDef.name = 'select';
    this.table?.addColumnDef(this.columnDef);
  }

  public ngOnDestroy(): void {
    this.table?.removeColumnDef(this.columnDef);
  }

  public handleSelectAllCheckbox({ checked }): void {
    this.rowCheckboxes
      .toArray()
      .forEach((checkBox) => (checkBox.checked = checked));
    this.selectAll.emit(checked);
  }

  public isChecked(value: T): boolean {
    return this._selection?.isSelected(value);
  }

  public isDisabled(value: T): boolean {
    return this.isChecked(value) ? false : this.disabled;
  }
}
