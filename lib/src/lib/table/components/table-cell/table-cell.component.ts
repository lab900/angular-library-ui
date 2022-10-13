import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Optional,
  Output,
  SkipSelf,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import { Lab900TableCustomHeaderCellDirective } from '../../directives/table-custom-header-cell.directive';
import { combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { Lab900TableService } from '../../services/table.service';
import { Lab900Sort } from '../../models/table-sort.model';

@Component({
  selector: 'lab900-table-cell[cell]',
  templateUrl: './table-cell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> implements OnDestroy {
  private cellSub: Subscription;

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
  public readonly sortIcon$: Observable<'north' | 'south' | ''>;
  public readonly cellFooter$: Observable<string>;
  public readonly sort$: Observable<Lab900Sort[] | null>;

  public constructor(@Optional() @SkipSelf() public table: MatTable<any>, private tableService: Lab900TableService) {
    this.sort$ = this.tableService.sort$;
    this.cellSub = this.cell$.subscribe((cell) => {
      if (this.columnDef.name) {
        this.table?.removeColumnDef(this.columnDef);
      }
      this.columnDef.name = cell.key;
      this.table?.addColumnDef(this.columnDef);
    });

    this.sticky$ = this.cell$.pipe(map((c) => !c?.hide && !!c?.sticky));
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
    this.sortDirection$ = this.sort$.pipe(
      withLatestFrom(this.cell$),
      map(([sort, cell]) => sort?.find((s) => s.id === (cell.sortKey ?? cell.key))?.direction ?? ''),
    );
    this.sortIcon$ = this.sortDirection$.pipe(
      distinctUntilChanged(),
      map((dir) => {
        if (dir === 'asc') {
          return 'north';
        } else if (dir === 'desc') {
          return 'south';
        }
        return '';
      }),
    );
    this.cellFooter$ = combineLatest([this.cell$.pipe(filter((c) => !!c.footer)), this._data$.asObservable()]).pipe(
      map(([cell, data]) => (typeof cell.footer === 'function' ? cell.footer(data, cell) : cell.footer)),
    );
  }

  public ngOnDestroy(): void {
    this.cellSub?.unsubscribe();
    this.table?.removeColumnDef(this.columnDef);
  }

  public getCellClass(cell: TableCell<T>, data: T): string {
    return typeof cell.cellClass === 'function' ? cell.cellClass(data, cell) : cell.cellClass;
  }
}
