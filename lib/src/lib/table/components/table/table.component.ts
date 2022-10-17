import { Component, ContentChild, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Paging } from '../../../common/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableHeaderContentDirective } from '../../directives/table-header-content.directive';
import { ActionButton } from '../../../button/models/action-button.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { Lab900TableTopContentDirective } from '../../directives/table-top-content.directive';
import { MatTable } from '@angular/material/table';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';
import { Lab900Sort } from '../../models/table-sort.model';
import { Lab900TableCustomHeaderCellDirective } from '../../directives/table-custom-header-cell.directive';
import { Lab900TableTab } from '../../models/table-tabs.model';
import { Lab900TableLeftFooterDirective } from '../../directives/table-left-footer.directive';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';
import { filter, map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableService } from '../../services/table.service';
import memo from 'memo-decorator';

type propFunction<T, R = string> = (data: T) => R;

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
  hideSelectableRow?: (row: T) => boolean;
}

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [Lab900TableService],
})
export class Lab900TableComponent<T extends object = object, TabId = string> implements OnDestroy {
  private readonly footerSub: Subscription;

  @ViewChild(MatTable)
  public table?: MatTable<T>;

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

  public get draggableRows(): boolean {
    return this.tableActionsBack?.some((a) => !!a?.draggable) || this.tableActionsFront?.some((a) => !!a?.draggable);
  }

  private readonly _data$ = new ReplaySubject<T[] | null>();
  public readonly data$: Observable<T[] | null>;

  @Input()
  public set data(value: T[] | null) {
    this._data$.next(value);
  }

  @Input()
  public tableClass?: string;

  @Input()
  public rowClass?: propFunction<T> | string;

  @Input()
  public rowColor?: propFunction<T> | string;

  @Input()
  public pageSizeConfig: { hidePageSize?: boolean; pageSizeOptions?: number[] } = {
    hidePageSize: true,
    pageSizeOptions: [5, 10, 50],
  };

  @Input()
  public loading = false;

  /**
   * Show a set of actions at the top of the table
   */
  @Input()
  public tableHeaderActions?: ActionButton<T>[];

  /**
   * Show a set of actions at the bottom of the table
   */
  @Input()
  public tableFooterActions?: ActionButton<T>[];

  /**
   * Show a set of actions at the start of each row
   */
  @Input()
  public tableActionsFront?: TableRowAction<T>[];

  /**
   * Show a set of actions at the end of each row
   */
  @Input()
  public tableActionsBack?: TableRowAction<T>[];

  /**
   * @Deprecated
   * Define [selectableRowsOptions] to enable selectable rows
   */
  @Input()
  public selectableRows?: boolean;

  @Input()
  public selection?: SelectionModel<T>;

  private readonly _selectableRowsOptions$ = new BehaviorSubject<SelectableRowsOptions<T> | null>(null);
  public readonly selectableRowsOptions$: Observable<SelectableRowsOptions<T>> = this._selectableRowsOptions$
    .asObservable()
    .pipe(filter((options) => !!options));

  @Input()
  public set selectableRowsOptions(value: SelectableRowsOptions<T> | undefined) {
    this._selectableRowsOptions$.next(value ?? null);
    if (value) {
      this.selection = new SelectionModel<any>(!value?.singleSelect, value?.selectedItems ?? []);
    }
  }

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
  public set sort(value: Lab900Sort[] | null) {
    this.tableService.updateSorting(value);
  }

  @Input()
  public multiSort = false;

  @Input()
  public disableSort = false;

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
  public preFooterTitle?: string;

  @Input()
  public stickyHeader?: boolean;

  @Output()
  public activeTabIdChange = new EventEmitter<TabId>();

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

  @ContentChild(Lab900TableCustomHeaderCellDirective, { read: TemplateRef })
  public customHeaderCell?: Lab900TableCustomHeaderCellDirective;

  @ContentChild(Lab900TableLeftFooterDirective, { read: TemplateRef })
  public footerLeftContent?: Lab900TableLeftFooterDirective;

  public readonly showCellFooters$: Observable<boolean>;

  public readonly visibleColumns$: Observable<TableCell<T>[]>;
  public readonly tabId$: Observable<TabId>;
  public readonly tabs$: Observable<Lab900TableTab<TabId, T>[]>;
  public readonly displayedColumns$: Observable<string[]>;

  public constructor(private tableService: Lab900TableService<T, TabId>) {
    this.visibleColumns$ = this.tableService.visibleColumns$;
    this.tabId$ = this.tableService.tabId$;
    this.tabs$ = this.tableService.tabs$;
    this.showCellFooters$ = this.visibleColumns$.pipe(
      map((columns) => !!columns?.some((c) => !!c?.footer)),
      shareReplay(1),
    );
    this.displayedColumns$ = combineLatest([this.visibleColumns$, this._selectableRowsOptions$.asObservable()]).pipe(
      map(([columns, options]) => this.getDisplayedColumns(columns, options)),
      shareReplay(1),
    );
    this.data$ = combineLatest([this._selectableRowsOptions$.asObservable(), this._data$.asObservable()]).pipe(
      map(([options, data]) =>
        options?.hideSelectableRow
          ? data?.map((v) => ({
              ...v,
              _hideSelectableRow: options.hideSelectableRow(v),
            }))
          : data,
      ),
      shareReplay(1),
    );

    /**
     * Fix for rendering async footers
     */
    this.footerSub = this.data$.pipe(withLatestFrom(this.showCellFooters$)).subscribe(([data, showFooter]) => {
      if (this.table) {
        this.table.removeFooterRowDef(null);
        if (data?.length && showFooter) {
          this.table.renderRows();
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.footerSub.unsubscribe();
  }

  public handleSelectAll(checked: boolean): void {
    this.selection.clear();
    if (checked) {
      this.data$.pipe(take(1)).subscribe((data) => {
        if (data?.length) {
          this.selection.select(...data.filter((row) => !(row as any)._hideSelectableRow));
          this.selectionChanged.emit(this.selection);
        }
      });
    } else {
      this.selectionChanged.emit(this.selection);
    }
  }

  public handleSelectRow(row: T): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection);
    this.rowSelectToggle.emit(row);
  }

  public isRowSelected(row: T): boolean {
    return this.selection?.isSelected(row);
  }

  @memo()
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
    classes.push((typeof this.rowClass === 'function' ? this.rowClass(row) : this.rowClass) ?? '');
    return classes.join(' ') || '';
  }

  @memo()
  public getRowColor(row: T): string {
    return (typeof this.rowColor === 'function' ? this.rowColor(row) : this.rowColor) ?? '';
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
    if (!this.disableSort && cell.sortable) {
      this.tableService.updateColumnSorting(cell, this.multiSort, (sort) => this.sortChange.emit(sort));
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

  private getDisplayedColumns(columns: TableCell<T>[], options: SelectableRowsOptions<T>): string[] {
    const displayColumns = columns?.map((c) => c.key);
    if (this.tableActionsFront?.length) {
      displayColumns.unshift('actions-front');
    }
    if (this.tableActionsBack?.length) {
      displayColumns.push('actions-back');
    }
    if (options) {
      if (options?.position === 'right') {
        displayColumns.push('select');
      } else {
        displayColumns.unshift('select');
      }
    }
    return displayColumns;
  }
}
