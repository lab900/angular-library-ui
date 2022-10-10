import { Component, EventEmitter, HostBinding, Input, OnDestroy, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import { Lab900Sort } from '../../models/table-sort.model';
import { Lab900TableCustomHeaderCellDirective } from '../../directives/table-custom-header-cell.directive';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import memo from 'memo-decorator';

@Component({
  selector: 'lab900-table-cell[cell]',
  templateUrl: './table-cell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> implements OnDestroy {
  @HostBinding()
  public className = 'lab900-table-cell';

  @ViewChild(MatColumnDef, { static: true })
  private columnDef!: MatColumnDef;

  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  public readonly cell$: Observable<TableCell<T>> = this._cell$.asObservable().pipe(
    filter((c) => !!c?.key),
    shareReplay(1),
  );

  @Input()
  public set cell(value: TableCell<T>) {
    this._cell$.next(value);
  }

  private readonly _data$ = new ReplaySubject<T[]>();

  @Input()
  public set data(value: T[]) {
    this._data$.next(value);
  }

  private readonly _sort$ = new BehaviorSubject<Lab900Sort[]>([]);
  public readonly sort$ = this._sort$.asObservable();

  @Input()
  public set sort(value: Lab900Sort[]) {
    this._sort$.next(value);
  }

  @Input()
  public disableSort = false;

  @Input()
  public customCellContent?: Lab900TableCustomCellDirective;

  @Input()
  public customHeaderCell?: Lab900TableCustomHeaderCellDirective;

  /**
   * max column width, set by table input
   */
  @Input()
  public maxColumnWidthFromTable?: string;

  @Output()
  public headerClick = new EventEmitter<TableCell<T>>();

  public readonly cellHeaderClass$: Observable<string>;
  public readonly cellHeaderIcon$: Observable<string>;
  public readonly cellHeaderSvgIcon$: Observable<string>;
  public readonly cellLabel$: Observable<string>;
  public readonly sticky$: Observable<boolean>;
  public readonly sortDirection$: Observable<SortDirection>;
  public readonly sortIcon$: Observable<'north' | 'south'>;
  public readonly cellFooter$: Observable<string>;

  public constructor(@Optional() public table: MatTable<any>) {
    this.cell$.subscribe((cell) => {
      if (this.columnDef.name) {
        this.table?.removeColumnDef(this.columnDef);
      }
      this.columnDef.name = cell.key;
      this.table?.addColumnDef(this.columnDef);
    });

    this.sticky$ = this.cell$.pipe(map((c) => !!c?.sticky));
    this.cellLabel$ = this.cell$.pipe(map((c) => readPropValue<TableCell<T>>(c.label, c)));
    this.cellHeaderClass$ = this.cell$.pipe(map((c) => readPropValue<TableCell<T>>(c.cellHeaderClass, c)));
    this.cellHeaderIcon$ = this.cell$.pipe(
      filter((c) => !!c?.cellHeaderIcon),
      map((c) => readPropValue<TableCell<T>>(c.cellHeaderIcon, c)),
    );
    this.cellHeaderSvgIcon$ = this.cell$.pipe(
      filter((c) => !!c?.cellHeaderSvgIcon),
      map((c) => readPropValue<TableCell<T>>(c.cellHeaderSvgIcon, c)),
    );
    this.sortDirection$ = combineLatest([this.cell$.pipe(filter((c) => !!c.sortable)), this.sort$]).pipe(
      map(([cell, sort]) => sort.find((s) => s.id === (cell.sortKey ?? cell.key))?.direction ?? ''),
    );
    this.sortIcon$ = this.sortDirection$.pipe(
      map((dir) => {
        if (dir === 'asc') {
          return 'north';
        } else if (dir === 'desc') {
          return 'south';
        }
      }),
    );
    this.cellFooter$ = combineLatest([this.cell$.pipe(filter((c) => !!c.footer)), this._data$.asObservable()]).pipe(
      map(([cell, data]) => (typeof cell.footer === 'function' ? cell.footer(data, cell) : cell.footer)),
    );
  }

  public ngOnDestroy() {
    this.table?.removeColumnDef(this.columnDef);
  }

  @memo()
  public getCellClass(data: T, cell: TableCell<T>): string {
    return typeof cell.cellClass === 'function' ? (cell.cellClass as (data: T, cell: TableCell) => string)(data, cell) : cell.cellClass;
  }
}
