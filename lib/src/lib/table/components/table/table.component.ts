import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Paging } from '../../../common/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableHeaderContentDirective } from '../../directives/table-header-content.directive';
import { ActionButton } from '../../../button/models/action-button.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { Lab900TableTopContentDirective } from '../../directives/table-top-content.directive';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { Lab900TableCellComponent } from '../table-cell/table-cell.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';

type propFunction<T, R = string> = (data: T) => R;

export interface Lab900Sort {
  /** The id of the column being sorted. */
  id: string;
  /** The sort direction. */
  direction: SortDirection;
}

export interface TableRowAction<T = any> extends ActionButton<T> {
  /**
   * Enable drag & drop for the table rows
   */
  draggable?: boolean;
}

export interface SelectableRowsOptions<T = any> {
  checkBoxColor?: ThemePalette;
  position?: 'right' | 'left';
  sticky?: boolean;
  showSelectAllCheckbox?: boolean;
  disabled?: boolean;
  maxSelectableRows?: number;
  selectedItems?: T[];
  singleSelect?: boolean;
}

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableComponent<T extends object = object> implements OnChanges, AfterContentInit {
  @Input()
  public set tableCells(cells: TableCell<T>[]) {
    this._tableCells = cells.sort(Lab900TableComponent.reorderColumnsFn);
    this.reloadColumns();
  }

  public get tableCells(): TableCell<T>[] {
    return this._tableCells;
  }

  public get selectCount(): number {
    return this.selection.selected.length;
  }

  public get selectEnabled(): boolean {
    if (this.selectableRowsOptions?.disabled) {
      return false;
    } else if (this.selectableRowsOptions?.maxSelectableRows) {
      return this.selection.selected.length < this.selectableRowsOptions.maxSelectableRows;
    } else {
      return true;
    }
  }

  public get draggableRows(): boolean {
    return this.tableActionsBack?.some((a) => !!a?.draggable) || this.tableActionsFront?.some((a) => !!a?.draggable);
  }

  @ViewChild(MatTable)
  public table!: MatTable<T>;

  @ViewChildren(Lab900TableCellComponent)
  public cellComponents!: QueryList<Lab900TableCellComponent<T>>;

  @ViewChildren('rowCheckbox')
  public rowCheckboxes!: QueryList<MatCheckbox>;

  @ViewChild('selectAllCheckbox')
  public selectAllCheckbox!: MatCheckbox;

  @Input()
  public selection = new SelectionModel<T>(true, []);

  @Input()
  public data: any[];

  @Input()
  public tableClass: string;

  @Input()
  public rowClass: propFunction<T> | string;

  @Input()
  public pageSizeConfig: { hidePageSize?: boolean; pageSizeOptions?: number[] } = {
    hidePageSize: true,
    pageSizeOptions: [5, 10, 50],
  };

  @Input()
  public loading = false;

  // tslint:disable-next-line:variable-name
  private _tableCells: TableCell<T>[];

  /**
   * Show a set of actions at the top of the table
   */
  @Input()
  public tableHeaderActions: ActionButton<T>[];

  /**
   * Show a set of actions at the bottom of the table
   */
  @Input()
  public tableFooterActions: ActionButton<T>[];

  /**
   * Show a set of actions at the start of each row
   */
  @Input()
  public tableActionsFront: TableRowAction<T>[];

  /**
   * Show a set of actions at the end of each row
   */
  @Input()
  public tableActionsBack: TableRowAction<T>[];

  /**
   * Enable checkboxes in front of the table rows
   */
  @Input()
  public selectableRows: boolean;

  @Input()
  public selectableRowsOptions: SelectableRowsOptions<T>;

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public toggleColumns = false;

  /**
   * Show columns filter to hide/show columns AND show rearrange option
   * This overrides toggleColumns field
   */
  @Input()
  public toggleAndMoveColumns = false;

  @Input()
  public filterIcon = 'filter_alt';

  @Input()
  public neverHideTable = false;

  @Input()
  public disabled = false;

  @Input()
  public sort: Lab900Sort[] = [];

  @Input()
  public multiSort = false;

  @Output()
  public readonly sortChange = new EventEmitter<Lab900Sort[]>();

  @Input()
  public paging?: Paging;

  /**
   * set max width of all columns, can be individually overwritten per tableCell
   * this will create a tooltip with the content of the cell, when the text overflows
   * @example: '300px'
   */
  @Input()
  public maxColumnWidth?: string;

  @Input()
  public onRowClick: (value: T, index: number, event: Event) => void;

  @Input()
  public preFooterTitle: string;

  @Output()
  public readonly pageChange = new EventEmitter<PageEvent>();

  @Output()
  public readonly selectionChanged = new EventEmitter<SelectionModel<T>>();

  @Output()
  public readonly rowSelectToggle = new EventEmitter<T>();

  @Output()
  public readonly tableCellsFiltered = new EventEmitter<TableCell<T>[]>();

  @Output()
  public readonly tableRowOrderChange = new EventEmitter<CdkDragDrop<T[]>>();

  @ContentChild(Lab900TableEmptyDirective, { read: TemplateRef })
  public emptyTableTemplate?: Lab900TableEmptyDirective;

  @ContentChild(Lab900TableDisabledDirective, { read: TemplateRef })
  public disabledTableTemplate?: Lab900TableDisabledDirective;

  @ContentChild(Lab900TableHeaderContentDirective, { read: TemplateRef })
  public tableHeaderContent?: Lab900TableHeaderContentDirective;

  @ContentChild(Lab900TableTopContentDirective, { read: TemplateRef })
  public tableTopContent?: Lab900TableTopContentDirective;

  @ContentChild(Lab900TableCustomCellDirective, { read: TemplateRef })
  public customCellContent?: Lab900TableCustomCellDirective;

  public displayedColumns: string[] = [];

  public showCellFooters = false;

  // when columnOrder is not specified, put them in the back (position 10000)
  public static reorderColumnsFn(a: TableCell, b: TableCell): number {
    return (a.columnOrder ?? 10000) - (b.columnOrder ?? 10000);
  }

  public ngAfterContentInit(): void {
    this.showCellFooters = this.tableCells.some((cell) => cell.footer);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectableRowsOptions = changes.selectableRowsOptions?.currentValue;

    if (selectableRowsOptions?.singleSelect) {
      this.selection = new SelectionModel<any>(false, []);
    }
    if (selectableRowsOptions?.selectedItems) {
      this.selection.clear();
      this.selection.select(...this.selectableRowsOptions.selectedItems);
    }
    if (changes.data) {
      this.reloadColumns();
    }
  }

  public selectRow(row: T): void {
    this.selection.toggle(row);

    if (this.selectAllCheckbox) {
      if (this.selection.selected.length === this.data.length) {
        this.selectAllCheckbox.checked = true;
      } else {
        this.selectAllCheckbox.checked = false;
      }
    }

    this.selectionChanged.emit(this.selection);
    this.rowSelectToggle.emit(row);
  }

  public getRowClasses(row: T, index: number): string {
    const classes: string[] = [];
    if (typeof this.onRowClick === 'function') {
      classes.push('lab900-row-clickable');
    }
    if (this.selection && this.selection.isSelected(row)) {
      classes.push('lab900-row-selected');
    }
    if (index % 2 === 0) {
      classes.push('lab900-row-even');
    } else {
      classes.push('lab900-row-odd');
    }

    classes.push(typeof this.rowClass === 'function' ? this.rowClass(row) : this.rowClass ?? '');
    return classes.join(' ') || '';
  }

  public handleRowClick(event: Event, row: T, index: number): void {
    if (typeof this.onRowClick === 'function') {
      this.onRowClick(row, index, event);
    }
  }

  public trackCellFn(_, item: TableCell<T>): string {
    return item.key;
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (cell.sortable) {
      if (this.multiSort) {
        const currentIndex = (this.sort || []).findIndex((s) => s.id === cell.key);
        if (currentIndex >= 0) {
          const { direction } = this.sort[currentIndex];
          if (direction === 'desc') {
            this.sort.splice(currentIndex, 1);
          } else {
            this.sort[currentIndex] = { ...this.sort[currentIndex], direction: 'desc' };
          }
        } else {
          this.sort.push({ id: cell.key, direction: 'asc' });
        }
      } else {
        const inCurrent = (this.sort || []).find((s) => s.id === cell.key);
        this.sort = [{ id: cell.key, direction: inCurrent?.direction === 'asc' ? 'desc' : 'asc' }];
      }
      this.sortChange.emit(this.sort);
    }
  }

  public handleSelectAllCheckbox({ checked }): void {
    const rowCheckboxes = this.rowCheckboxes.toArray();
    if (checked) {
      this.selection.clear();
      this.selection.select(...this.data);
      rowCheckboxes.forEach((checkBox) => (checkBox.checked = true));
    } else {
      this.selection.clear();
      rowCheckboxes.forEach((checkBox) => (checkBox.checked = false));
    }

    this.selectionChanged.emit(this.selection);
  }

  public onTableCellsFiltered(tableCells: TableCell[]): void {
    this.tableCells = tableCells.sort(Lab900TableComponent.reorderColumnsFn);
    this.addColumnsToTable();
    this.tableCellsFiltered.emit(tableCells);
  }

  private addColumnsToTable(): void {
    let columns = [];
    for (const column of this.cellComponents.toArray()) {
      this.table.addColumnDef(column.columnDef);
      if (!column.cell.hide) {
        columns = [...columns, column.cell.key];
      }
    }
    if (this.tableActionsFront?.length) {
      columns.unshift('actions-front');
    }
    if (this.tableActionsBack?.length) {
      columns.push('actions-back');
    }

    if (this.selectableRows) {
      if (this.selectableRowsOptions?.position === 'right') {
        columns.push('select');
      } else {
        columns.unshift('select');
      }
    }

    this.displayedColumns = columns;
  }

  private removeOldColumnsFromTable(): void {
    const oldColumns: Set<MatColumnDef> = (this.table as any)?._customColumnDefs;
    oldColumns?.forEach((oldColumn: MatColumnDef) => {
      this.table.removeColumnDef(oldColumn);
      // removing column also from the displayed columns (such array should match the dataSource!)
      this.displayedColumns.splice(
        this.displayedColumns.findIndex((column: string) => column === oldColumn.name),
        1,
      );
    });
  }

  private reloadColumns(): void {
    setTimeout(() => {
      this.removeOldColumnsFromTable();
      this.addColumnsToTable();
    });
  }
}
