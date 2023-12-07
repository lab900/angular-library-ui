import {
  ChangeDetectionStrategy,
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
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
  Subscription,
} from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { Lab900TableService } from '../../services/table.service';
import { Lab900Sort } from '../../models/table-sort.model';
import { AsyncPipe, NgClass, NgComponentOutlet, NgIf } from '@angular/common';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { DefaultColumnHeaderRendererComponent } from '../../column-header-renderers/default-column-header-renderer/default-column-header-renderer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { isDifferent } from '../../../utils/different.utils';

@Component({
  selector: 'lab900-table-cell[cell]',
  templateUrl: './table-cell.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    DefaultCellRendererComponent,
    MatTableModule,
    NgClass,
    DefaultColumnHeaderRendererComponent,
    MatTooltipModule,
    TranslateModule,
    NgComponentOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> implements OnDestroy {
  private cellSub: Subscription;

  @HostBinding()
  public className = 'lab900-table-cell';

  @ViewChild(MatColumnDef, { static: true })
  private columnDef!: MatColumnDef;

  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  public readonly cell$: Observable<TableCell<T>> = this._cell$
    .asObservable()
    .pipe(
      filter((c) => !!c?.key),
      shareReplay(1)
    );

  public readonly showEditorForElement$ = new BehaviorSubject<T>(undefined);
  private readonly tableColumnMaxWidth$ = new BehaviorSubject<string>('100%');

  public readonly columnMaxWidth$: Observable<string> = combineLatest([
    this.cell$,
    this.tableColumnMaxWidth$,
  ]).pipe(
    map(
      ([cell, tableColumnMaxWidth]) => cell?.cellMaxWidth || tableColumnMaxWidth
    ),
    distinctUntilChanged(),
    shareReplay(1)
  );

  public readonly columnWidth$: Observable<string> = this.cell$.pipe(
    map((cell) => {
      if (cell?.width === '*') {
        return '100%';
      }
      return cell?.width;
    }),
    distinctUntilChanged(),
    shareReplay(1)
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

  /**
   * max column width, set by table input
   */
  @Input()
  public set maxColumnWidthFromTable(value: string) {
    this.tableColumnMaxWidth$.next(value);
  }

  @Output()
  private readonly headerClick = new EventEmitter<TableCell<T>>();

  @Output()
  private readonly valueChanged = new EventEmitter<CellValueChangeEvent<T>>();

  public readonly cellHeaderClass$: Observable<string>;
  public readonly sticky$: Observable<boolean>;
  public readonly cellFooter$: Observable<string>;
  public readonly sort$: Observable<Lab900Sort[] | null>;

  public readonly defaultCellRenderer = DefaultCellRendererComponent;
  public readonly defaultHeaderRenderer = DefaultColumnHeaderRendererComponent;

  public constructor(
    @Optional() @SkipSelf() public table: MatTable<any>,
    private tableService: Lab900TableService
  ) {
    this.sort$ = this.tableService.sort$;
    this.cellSub = this.cell$.subscribe((cell) => {
      if (this.columnDef.name) {
        this.table?.removeColumnDef(this.columnDef);
      }
      this.columnDef.name = cell.key;
      this.table?.addColumnDef(this.columnDef);
    });

    this.sticky$ = this.cell$.pipe(map((c) => !c?.hide && !!c?.sticky));

    this.cellHeaderClass$ = this.cell$.pipe(
      map((c) => readPropValue<TableCell<T>>(c.cellHeaderClass, c))
    );

    this.cellFooter$ = combineLatest([
      this.cell$.pipe(filter((c) => !!c.footer)),
      this._data$.asObservable(),
    ]).pipe(
      map(([cell, data]) =>
        typeof cell.footer === 'function'
          ? cell.footer(data, cell)
          : cell.footer
      )
    );
  }

  public canEdit(element: T): Observable<boolean> {
    return combineLatest([this.cell$, this.tableService.disableEditing$]).pipe(
      map(
        ([cell, disableEditing]) =>
          !disableEditing &&
          cell.cellEditor &&
          !cell.cellEditorOptions?.disabled?.(element)
      )
    );
  }

  public readonly handleValueChanged = (
    value: any,
    cell: TableCell<T>,
    row: T
  ): void => {
    if (cell?.cellEditorOptions?.valueChanged) {
      cell.cellEditorOptions.valueChanged({ value, cell, row });
    }
    this.valueChanged.emit({ value, cell, row });
  };

  public ngOnDestroy(): void {
    this.cellSub?.unsubscribe();
    this.table?.removeColumnDef(this.columnDef);
  }

  public getCellClass(cell: TableCell<T>, data: T): string {
    return typeof cell.cellClass === 'function'
      ? cell.cellClass(data, cell)
      : cell.cellClass;
  }

  public handleCellFocus(cell: TableCell<T>, data: T): void {
    this.enterEditMode(cell, data);
  }

  public handleCellClick(event: MouseEvent, cell: TableCell<T>, data: T): void {
    if (cell.click) {
      event.stopImmediatePropagation();
      event.preventDefault();
      cell.click(data, cell, event);
    } else if (
      !this.tableService._disableEditing$.value &&
      cell.cellEditor &&
      !cell.cellEditorOptions?.disabled?.(data)
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.openEditor(data);
    }
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (!this.disableSort) {
      this.headerClick.emit(cell);
    }
  }

  public openEditor(data: T): void {
    if (isDifferent(this.showEditorForElement$.value, data)) {
      this.showEditorForElement$.next(data);
    }
  }

  public closeEditor(): void {
    if (this.showEditorForElement$.value) {
      this.showEditorForElement$.next(undefined);
    }
  }

  private enterEditMode(cell: TableCell<T>, data: T): void {
    if (
      !this.tableService._disableEditing$.value &&
      cell.cellEditor &&
      !cell.cellEditorOptions?.disabled?.(data)
    ) {
      this.openEditor(data);
    }
  }
}
