import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  Input,
  linkedSignal,
  model,
  output,
  TemplateRef,
  TrackByFunction,
  untracked,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableHeaderContentDirective } from '../../directives/table-header-content.directive';
import { ActionButton } from '../../../button/models/action-button.model';
import { Lab900TableTopContentDirective } from '../../directives/table-top-content.directive';
import { Lab900TableRowDetailDirective } from '../../directives/table-row-detail.directive';
import { ExpandableRows, Lab900TableRowDetailContext } from '../../models/table-expandable-rows.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';
import { Lab900Sort } from '../../models/table-sort.model';
import { Lab900TableTab } from '../../models/table-tabs.model';
import { Lab900TableService } from '../../services/table.service';
import { Lab900TableHeaderComponent } from '../table-header/lab900-table-header.component';
import { NgTemplateOutlet } from '@angular/common';
import { Lab900TableTabsComponent } from '../table-tabs/table-tabs.component';
import { TableCellSelectComponent } from '../table-cell-select/table-cell-select.component';
import { Lab900TableCellComponent } from '../table-cell/table-cell.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Lab900ActionButtonComponent } from '../../../button/components/action-button/lab900-action-button.component';
import { MatProgressBar } from '@angular/material/progress-bar';

type propFunction<T, R = string> = (data: T) => R;

export interface TableRowAction<T = any> extends ActionButton<T> {
  /**
   * Enable drag & drop for the table rows
   */
  draggable?: boolean;
}

export interface SelectableRows<T = any> {
  enabled: boolean;
  checkBoxColor?: ThemePalette;
  position?: 'right' | 'left';
  sticky?: boolean;
  showSelectAllCheckbox?: boolean;
  disabled?: boolean;
  maxSelectableRows?: number;
  selectedItems?: T[];
  singleSelect?: boolean;
  hideSelectableRow?: (row: T) => boolean;
  compareFn?: (o1: T, o2: T) => boolean;
}

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Lab900TableService],
  imports: [
    Lab900TableHeaderComponent,
    NgTemplateOutlet,
    Lab900TableTabsComponent,
    CdkDropList,
    TableCellSelectComponent,
    Lab900TableCellComponent,
    CdkDragHandle,
    CdkDrag,
    TranslatePipe,
    CdkDragPlaceholder,
    Lab900ActionButtonComponent,
    MatProgressBar,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    MatFooterCellDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatFooterRow,
    MatFooterRowDef,
  ],
})
export class Lab900TableComponent<T extends object = object, TabId = string> {
  private readonly tableService = inject(Lab900TableService<T, TabId>);

  /**
   * This will respect the defined widths of the table cells
   * If any cell has a width defined, the table will have a fixed layout
   */
  public readonly _fixedWidths = input<boolean>(false, {
    alias: 'fixedWidth',
  });
  protected readonly fixedWidths = computed(() => {
    return this._fixedWidths() || this.visibleColumns().some(c => !!c?.width);
  });

  public readonly table = viewChild(MatTable<T>);

  public readonly tableCells = model.required<TableCell<T>[]>();
  public readonly columns = computed(() => {
    let columns: TableCell<T>[] = this.tableCells();
    const tabs = this.tableTabs();
    const tabId = this.tabId();
    if (tabs?.length) {
      const activeTab = tabId ? tabs.find(tab => tab.id === tabId) : tabs?.[0];
      if (activeTab?.tableCells) {
        columns = activeTab?.tableCells;
      }
    }
    return columns.filter(c => !!c.key).sort(Lab900TableService.reorderColumnsFn);
  });

  public readonly visibleColumns = computed(() => this.columns().filter(c => !c.hide));
  public readonly showCellFooters = computed(() => this.visibleColumns().some(c => Object.hasOwn(c, 'footer')));

  public readonly tableTabs = input<Lab900TableTab<TabId, T>[] | undefined>(undefined);
  public readonly activeTabId = model<TabId | undefined>(undefined);
  public readonly tableClass = input<string>('');
  public readonly rowClass = input<propFunction<T> | string | undefined>(undefined);
  public readonly rowColor = input<propFunction<T> | string | undefined>(undefined);
  public readonly loading = model<boolean>(false);

  /**
   * Show a set of actions at the top of the table
   */
  public readonly tableHeaderActions = input<ActionButton[]>([]);

  /**
   * Show a set of actions at the bottom of the table
   */
  public readonly tableFooterActions = input<ActionButton[]>([]);

  /**
   * Show a set of actions at the start of each row
   */
  public readonly tableActionsFront = input<TableRowAction<T>[]>([]);

  /**
   * Show a set of actions at the end of each row
   */
  public readonly tableActionsBack = input<TableRowAction<T>[]>([]);

  public readonly draggableRows = computed(() => {
    return this.tableActionsBack()?.some(a => !!a?.draggable) || this.tableActionsFront()?.some(a => !!a?.draggable);
  });

  public readonly selectableRows = input<SelectableRows<T> | undefined>(undefined);

  /**
   * Created once, the first time selectable rows are enabled, and kept afterwards
   */
  public readonly selection = linkedSignal<SelectableRows<T> | undefined, SelectionModel<T> | undefined>({
    source: this.selectableRows,
    computation: (selectableRows, previous) =>
      previous?.value ??
      (selectableRows?.enabled
        ? new SelectionModel(!selectableRows.singleSelect, selectableRows.selectedItems, true, selectableRows.compareFn)
        : undefined),
  });

  /**
   * Options for rows that expand on click. Expanding needs a `lab900TableRowDetail` template.
   */
  public readonly expandableRows = input<ExpandableRows<T> | undefined>(undefined);

  /**
   * The expanded rows. Bind it two-way to expand or collapse rows from the parent.
   */
  public readonly expandedRows = model<T[]>([]);

  /**
   * Lookup set for the expanded rows, used when rows are compared by reference
   */
  private readonly expandedRowSet = computed(() => new Set(this.expandedRows()));

  /**
   * Show columns filter to hide/show columns
   */
  public readonly toggleColumns = input<boolean>(false);

  /**
   * Show columns filter to hide/show columns AND show rearrange option
   * This overrides toggleColumns field
   */
  public readonly toggleAndMoveColumns = input<boolean>(false);
  public readonly filterIcon = input<string>('filter_alt');
  public readonly showFilterHeader = input<boolean>(true);
  public readonly neverHideTable = input<boolean>(false);
  public readonly disabled = model<boolean>(false);

  @Input()
  public set sort(value: Lab900Sort[] | undefined) {
    this.tableService.updateSorting(value);
  }

  public readonly multiSort = input<boolean>(false);
  public readonly disableSort = input<boolean>(false);

  /**
   * set max width of all columns, can be individually overwritten per tableCell
   * this will create a tooltip with the content of the cell, when the text overflows
   * @example: '300px'
   */
  public readonly maxColumnWidth = input<string | undefined>(undefined);

  public readonly onRowClick = input<((value: T, index: number, event: Event) => void) | undefined>(undefined);

  public readonly preFooterTitle = input<string | undefined>(undefined);
  public readonly stickyHeader = input<boolean>(false);
  public readonly trackByTableFn = input.required<TrackByFunction<T>>();

  @Input()
  public set disabledEditing(value: boolean) {
    this.tableService.updateDisableEditing(value);
  }

  // outputs
  public readonly selectionChanged = output<SelectionModel<T>>();
  public readonly rowSelectToggle = output<T>();
  /**
   * @deprecated use tableCellsChange instead
   */
  public readonly tableCellsFiltered = output<TableCell<T>[]>();
  public readonly tableRowOrderChange = output<CdkDragDrop<T[]>>();
  public readonly cellValueChanged = output<CellValueChangeEvent<T>>();
  public readonly sortChange = output<Lab900Sort[]>();
  public readonly rowExpandToggle = output<{ row: T; expanded: boolean }>();

  // content children
  protected readonly emptyTableTemplate = contentChild(Lab900TableEmptyDirective, {
    read: TemplateRef,
  });
  protected readonly disabledTableTemplate = contentChild(Lab900TableDisabledDirective, {
    read: TemplateRef,
  });
  protected readonly tableHeaderContent = contentChild(Lab900TableHeaderContentDirective, {
    read: TemplateRef,
  });
  protected readonly tableTopContent = contentChild(Lab900TableTopContentDirective, {
    read: TemplateRef,
  });
  protected readonly rowDetailTemplate = contentChild<
    Lab900TableRowDetailDirective<T>,
    TemplateRef<Lab900TableRowDetailContext<T>>
  >(Lab900TableRowDetailDirective, {
    read: TemplateRef,
  });

  protected readonly expandingEnabled = computed(
    () => !!this.rowDetailTemplate() && this.expandableRows()?.enabled !== false
  );

  private previousTabId?: TabId;

  public readonly displayedColumns = computed(() => this.getDisplayedColumns());
  public readonly tabId = this.tableService.tabId;
  public readonly tabs = this.tableService.tabs;

  public readonly data = model<T[] | null | undefined>(undefined);
  public readonly publicData = computed(() => {
    const hideSelectableRow = this.selectableRows()?.hideSelectableRow;
    let data = this.data();
    if (hideSelectableRow) {
      data = data?.map(v => ({
        ...v,
        _hideSelectableRow: hideSelectableRow(v),
      }));
    }
    return data;
  });

  public constructor() {
    effect(() => {
      const tableTabs = this.tableTabs();
      if (tableTabs) {
        this.tableService.updateTabs(tableTabs);
      }
    });

    effect(() => {
      const activeTabId = this.activeTabId();
      if (activeTabId) {
        this.tableService.updateTabId(activeTabId);
      }
    });

    effect(() => {
      const table = this.table();
      if (table) {
        table.removeFooterRowDef(null as unknown as any);
        if (this.showCellFooters()) {
          table.renderRows();
        }
      }
    });

    // switching tabs collapses all rows
    effect(() => {
      const tabId = this.tabId();
      if (this.previousTabId !== undefined && this.previousTabId !== tabId) {
        untracked(() => this.collapseAllRows());
      }
      this.previousTabId = tabId;
    });

    // forget expanded rows that are no longer in the data
    effect(() => {
      const data = this.data();
      if (!data) {
        return;
      }
      const expanded = untracked(this.expandedRows);
      if (!expanded.length) {
        return;
      }
      const hasCompareFn = !!untracked(this.expandableRows)?.compareFn;
      const dataSet = hasCompareFn ? undefined : new Set(data);
      const remaining = expanded.filter(row => dataSet?.has(row) ?? data.some(d => this.compareRows(d, row)));
      if (remaining.length !== expanded.length) {
        untracked(() => this.expandedRows.set(remaining));
      }
    });
  }

  /**
   * Row predicate for the detail row. It is an arrow function, because mat-table calls it without `this`.
   */
  protected readonly hasRowDetail = (index: number, row: T): boolean => this.isRowExpandable(row);

  public handleSelectAll(checked: boolean): void {
    const selection = this.selection();
    if (selection) {
      selection.clear();
      const data = this.data();
      if (checked) {
        if (data?.length) {
          selection.select(...data.filter(row => !(row as any)?._hideSelectableRow));
          this.selectionChanged.emit(selection);
        }
      } else {
        this.selectionChanged.emit(selection);
      }
    }
  }

  public handleSelectRow(row: T): void {
    const selection = this.selection();
    if (selection) {
      selection.toggle(row);
      this.selectionChanged.emit(selection);
      this.rowSelectToggle.emit(row);
    }
  }

  public isRowSelected(row: T): boolean {
    return !!this.selection()?.isSelected(row);
  }

  public isRowExpandable(row: T): boolean {
    if (!this.expandingEnabled()) {
      return false;
    }
    const isExpandable = this.expandableRows()?.isExpandable;
    return !isExpandable || isExpandable(row);
  }

  public isRowExpanded(row: T): boolean {
    if (!this.expandableRows()?.compareFn) {
      return this.expandedRowSet().has(row);
    }
    return this.expandedRows().some(r => this.compareRows(r, row));
  }

  public toggleRowExpansion(row: T): void {
    if (this.isRowExpanded(row)) {
      this.collapseRow(row);
    } else {
      this.expandRow(row);
    }
  }

  public expandRow(row: T): void {
    if (!this.isRowExpandable(row) || this.isRowExpanded(row)) {
      return;
    }
    const multiple = this.expandableRows()?.multiple !== false;
    this.expandedRows.update(rows => (multiple ? [...rows, row] : [row]));
    this.rowExpandToggle.emit({ row, expanded: true });
  }

  public collapseRow(row: T): void {
    if (!this.isRowExpanded(row)) {
      return;
    }
    this.expandedRows.update(rows => rows.filter(r => !this.compareRows(r, row)));
    this.rowExpandToggle.emit({ row, expanded: false });
  }

  public collapseAllRows(): void {
    if (this.expandedRows().length) {
      this.expandedRows.set([]);
    }
  }

  public getRowClasses(row: T, index: number): string {
    const classes: string[] = [];
    if (typeof this.onRowClick() === 'function' || this.isRowExpandable(row)) {
      classes.push('lab900-row-clickable');
    }
    if (index % 2 === 0) {
      classes.push('lab900-row-even');
    } else {
      classes.push('lab900-row-odd');
    }
    const rowClass = this.rowClass();
    if (rowClass) {
      classes.push((typeof rowClass === 'function' ? rowClass(row) : rowClass) ?? '');
    }
    return classes.join(' ') || '';
  }

  public getRowColor(row: T): string {
    const rowColor = this.rowColor();
    return (typeof rowColor === 'function' ? rowColor(row) : rowColor) ?? '';
  }

  public handleRowClick(event: Event, row: T, index: number): void {
    if (this.isRowExpandable(row)) {
      this.toggleRowExpansion(this.getSourceRow(row, index));
    }
    const rowClick = this.onRowClick();
    if (typeof rowClick === 'function') {
      rowClick(row, index, event);
    }
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (!this.disableSort() && cell.sortable) {
      this.tableService.updateColumnSorting(cell, this.multiSort(), sort => this.sortChange.emit(sort ?? []));
    }
  }

  public onTableCellsFiltered(tableCells: TableCell[]): void {
    this.tableCells.set(tableCells);
    this.tableCellsFiltered.emit(tableCells);
  }

  public onActiveTabChange(id: TabId): void {
    this.activeTabId.set(id);
  }

  public handleRowKeydown(event: Event, row: T, index: number): void {
    // ignore keys that come from an element inside the row, for example an input in a cell
    if (event.target === event.currentTarget && this.isRowExpandable(row)) {
      event.preventDefault();
      this.toggleRowExpansion(this.getSourceRow(row, index));
    }
  }

  public handleRowDragStarted(row: T, index: number): void {
    // the detail row does not move with the dragged row
    this.collapseRow(this.getSourceRow(row, index));
  }

  protected isRowExpandedAt(row: T, index: number): boolean {
    return this.isRowExpanded(this.getSourceRow(row, index));
  }

  protected getRowDetailContext(row: T, index: number): Lab900TableRowDetailContext<T> {
    const sourceRow = this.getSourceRow(row, index);
    return { $implicit: sourceRow, index, collapse: () => this.collapseRow(sourceRow) };
  }

  /**
   * `publicData` copies the rows when `hideSelectableRow` is set.
   * Expanded rows are stored as the rows the parent passed in, so it can compare them.
   */
  protected getSourceRow(row: T, index: number): T {
    return this.data()?.[index] ?? row;
  }

  private compareRows(o1: T, o2: T): boolean {
    const compareFn = this.expandableRows()?.compareFn;
    return compareFn ? compareFn(o1, o2) : o1 === o2;
  }

  private getDisplayedColumns(): string[] {
    const displayColumns = this.visibleColumns()?.map(c => c.key);
    if (this.tableActionsFront().length) {
      displayColumns.unshift('actions-front');
    }
    if (this.tableActionsBack().length) {
      displayColumns.push('actions-back');
    }
    if (this.selectableRows()?.enabled) {
      if (this.selectableRows()?.position === 'right') {
        displayColumns.push('select');
      } else {
        displayColumns.unshift('select');
      }
    }
    return displayColumns;
  }
}
