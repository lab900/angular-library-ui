import { Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { Directive, Input } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { readPropValue } from '../../utils/utils';

@Directive()
export abstract class ColumnHeaderRendererAbstract<
  ColumnHeaderRenderOptions = any,
  T = any
> {
  protected readonly _columnConfig$ = new ReplaySubject<TableCell<T>>();
  public readonly columnConfig$: Observable<TableCell<T>> = this._columnConfig$
    .asObservable()
    .pipe(shareReplay(1));

  @Input({ required: true })
  public set columnConfig(value: TableCell<T>) {
    this._columnConfig$.next(value);
  }

  @Input()
  public disableSort = false;

  public readonly rendererOptions$: Observable<
    ColumnHeaderRenderOptions | undefined
  > = this.columnConfig$.pipe(
    map((config) => config.headerRenderOptions),
    shareReplay(1)
  );

  public readonly columnLabel$ = this.columnConfig$.pipe(
    map((c) => readPropValue<TableCell<T>>(c.label, c))
  );
}
