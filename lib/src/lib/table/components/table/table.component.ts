import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  Input,
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
import { MatTable, MatTableModule } from '@angular/material/table';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';
import { Lab900Sort } from '../../models/table-sort.model';
import { Lab900TableTab } from '../../models/table-tabs.model';
import { Lab900TableService } from '../../services/table.service';
import { Lab900TableHeaderComponent } from '../table-header/lab900-table-header.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Lab900TableTabsComponent } from '../table-tabs/table-tabs.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableCellSelectComponent } from '../table-cell-select/table-cell-select.component';
import { Lab900TableCellComponent } from '../table-cell/table-cell.component';
import { TranslateModule } from '@ngx-translate/core';
import { A11yModule } from '@angular/cdk/a11y';
import { Lab900ActionButtonComponent } from '../../../button/components/action-button/lab900-action-button.component';

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
}

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Lab900TableService],
  standalone: true,
  imports: [
    Lab900TableHeaderComponent,
    NgTemplateOutlet,
    Lab900TableTabsComponent,
    MatProgressBarModule,
    NgClass,
    MatTableModule,
    CdkDropList,
    TableCellSelectComponent,
    Lab900TableCellComponent,
    CdkDragHandle,
    CdkDrag,
    TranslateModule,
    CdkDragPlaceholder,
    A11yModule,
    Lab900ActionButtonComponent,
  ],
})
export class Lab900TableComponent<T extends object = object, TabId = string> {
  private readonly tableService: Lab900TableService<T, TabId> =
    inject(Lab900TableService);

  /**
   * This will respect the defined widths of the table cells
   * If any cell has a width defined, the table will have a fixed layout
   */
  protected readonly _fixedWidths = input<boolean>(false, {
    alias: 'fixedWidth',
  });
  protected readonly fixedWidths = computed(() => {
    return (
      this._fixedWidths() ||
      this.tableService.visibleColumns().some((c) => !!c?.width)
    );
  });

  public readonly table = viewChild(MatTable<T>);

  @Input()
  public set tableCells(columns: TableCell<T>[]) {
    this.tableService.updateColumns(columns);
  }

  @Input()
  public set tableTabs(tabs: Lab900TableTab<TabId, T>[]) {
    this.tableService.updateTabs(tabs);
  }

  @Input()
  public set activeTabId(tabId: TabId) {
    this.tableService.updateTabId(tabId);
  }

  public readonly tableClass = input<string>('');
  public readonly rowClass = input<propFunction<T> | string | undefined>(
    undefined,
  );
  public readonly rowColor = input<propFunction<T> | string | undefined>(
    undefined,
  );
  public readonly loading = input<boolean>(false);

  /**
   * Show a set of actions at the top of the table
   */
  public readonly tableHeaderActions = input<ActionButton<T>[]>([]);

  /**
   * Show a set of actions at the bottom of the table
   */
  public readonly tableFooterActions = input<ActionButton<T>[]>([]);

  /**
   * Show a set of actions at the start of each row
   */
  public readonly tableActionsFront = input<TableRowAction<T>[]>([]);

  /**
   * Show a set of actions at the end of each row
   */
  public readonly tableActionsBack = input<TableRowAction<T>[]>([]);

  public readonly draggableRows = computed(() => {
    return (
      this.tableActionsBack()?.some((a) => !!a?.draggable) ||
      this.tableActionsFront()?.some((a) => !!a?.draggable)
    );
  });

  public readonly selectableRows = input<SelectableRows<T> | undefined>(
    undefined,
  );

  public readonly selection = model<SelectionModel<T> | undefined>();

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
  public readonly neverHideTable = input<boolean>(false);
  public readonly disabled = input<boolean>(false);

  @Input()
  public set sort(value: Lab900Sort[] | null) {
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

  public readonly onRowClick =
    input<(value: T, index: number, event: Event) => void | undefined>(
      undefined,
    );

  public readonly preFooterTitle = input<string | undefined>(undefined);
  public readonly stickyHeader = input<boolean>(false);
  public readonly trackByTableFn = input.required<TrackByFunction<T>>();

  @Input()
  public set disabledEditing(value: boolean) {
    this.tableService.updateDisableEditing(value);
  }

  // outputs
  public readonly activeTabIdChange = output<TabId>();
  public readonly selectionChanged = output<SelectionModel<T>>();
  public readonly rowSelectToggle = output<T>();
  public readonly tableCellsFiltered = output<TableCell<T>[]>();
  public readonly tableRowOrderChange = output<CdkDragDrop<T[]>>();
  public readonly cellValueChanged = output<CellValueChangeEvent<T>>();
  public readonly sortChange = output<Lab900Sort[]>();

  // content children
  protected readonly emptyTableTemplate = contentChild(
    Lab900TableEmptyDirective,
    {
      read: TemplateRef,
    },
  );
  protected readonly disabledTableTemplate = contentChild(
    Lab900TableDisabledDirective,
    {
      read: TemplateRef,
    },
  );
  protected readonly tableHeaderContent = contentChild(
    Lab900TableHeaderContentDirective,
    {
      read: TemplateRef,
    },
  );
  protected readonly tableTopContent = contentChild(
    Lab900TableTopContentDirective,
    {
      read: TemplateRef,
    },
  );

  public readonly visibleColumns = this.tableService.visibleColumns;
  public readonly displayedColumns = computed(() => this.getDisplayedColumns());
  public readonly tabId = this.tableService.tabId;
  public readonly tabs = this.tableService.tabs;
  public readonly showCellFooters = computed(() =>
    this.visibleColumns().some((c) => !!c?.footer),
  );

  public readonly data = input<T[] | null>(null);
  public readonly publicData = computed(() => {
    const options = this.selectableRows();
    const data = this.data();
    return options?.hideSelectableRow
      ? data?.map((v) => ({
          ...v,
          _hideSelectableRow: options.hideSelectableRow(v),
        }))
      : data;
  });

  public constructor() {
    effect(() => {
      const table = untracked(this.table);
      if (table) {
        table.removeFooterRowDef(null);
        if (this.data()?.length && this.showCellFooters()) {
          table.renderRows();
        }
      }
    });

    effect(
      () => {
        if (this.selectableRows().enabled) {
          if (!untracked(this.selection)) {
            console.log('here');
            this.selection.set(
              new SelectionModel(!this.selectableRows().singleSelect),
            );
          }
        }
      },
      { allowSignalWrites: true },
    );
  }

  public handleSelectAll(checked: boolean): void {
    this.selection()?.clear();
    const data = this.data();
    if (checked) {
      if (data?.length) {
        this.selection()?.select(
          ...data.filter((row) => !(row as any)._hideSelectableRow),
        );
        this.selectionChanged.emit(this.selection());
      }
    } else {
      this.selectionChanged.emit(this.selection());
    }
  }

  public handleSelectRow(row: T): void {
    this.selection()?.toggle(row);
    this.selectionChanged.emit(this.selection());
    this.rowSelectToggle.emit(row);
  }

  public isRowSelected(row: T): boolean {
    return this.selection()?.isSelected(row);
  }

  public getRowClasses(row: T, index: number): string {
    const classes: string[] = [];
    if (typeof this.onRowClick === 'function') {
      classes.push('lab900-row-clickable');
    }
    if (index % 2 === 0) {
      classes.push('lab900-row-even');
    } else {
      classes.push('lab900-row-odd');
    }
    const rowClass = this.rowClass();
    if (rowClass) {
      classes.push(
        (typeof rowClass === 'function' ? rowClass(row) : rowClass) ?? '',
      );
    }
    return classes.join(' ') || '';
  }

  public getRowColor(row: T): string {
    const rowColor = this.rowColor();
    return (typeof rowColor === 'function' ? rowColor(row) : rowColor) ?? '';
  }

  public handleRowClick(event: Event, row: T, index: number): void {
    if (typeof this.onRowClick() === 'function') {
      this.onRowClick()(row, index, event);
    }
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (!this.disableSort() && cell.sortable) {
      this.tableService.updateColumnSorting(cell, this.multiSort(), (sort) =>
        this.sortChange.emit(sort),
      );
    }
  }

  public onTableCellsFiltered(tableCells: TableCell[]): void {
    this.tableCells = tableCells;
    this.tableCellsFiltered.emit(tableCells);
  }

  public onActiveTabChange(id: TabId): void {
    this.activeTabId = id;
    this.activeTabIdChange.emit(id);
  }

  private getDisplayedColumns(): string[] {
    const displayColumns = this.visibleColumns()?.map((c) => c.key);
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
