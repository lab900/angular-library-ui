import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { Directive, Input } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

@Directive()
export abstract class CellRendererAbstract<CellRenderOptions = any, T = any> {
  public readonly cellValue$: Observable<any>;

  protected readonly _columnConfig$ = new ReplaySubject<TableCell<T>>();
  public readonly columnConfig$: Observable<TableCell<T, CellRenderOptions>> =
    this._columnConfig$.asObservable().pipe(shareReplay(1));

  @Input({ required: true })
  public set columnConfig(value: TableCell<T, CellRenderOptions>) {
    this._columnConfig$.next(value);
  }

  protected readonly _data$ = new ReplaySubject<T>();
  public readonly data$ = this._data$.asObservable();

  @Input({ required: true })
  public set data(value: T) {
    this._data$.next(value);
  }

  public readonly rendererOptions$: Observable<CellRenderOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config.cellRenderOptions),
      shareReplay(1)
    );

  public constructor() {
    this.cellValue$ = this.getCellValue();
  }

  protected getCellValue(): Observable<any> {
    return combineLatest([this.columnConfig$, this.data$]).pipe(
      map(([config, data]) => this.cellFormatter(config, data)),
      shareReplay(1)
    );
  }

  protected cellFormatter(cell: TableCell<T>, data: T): any {
    if (cell?.cellFormatter) {
      return cell.cellFormatter(data, cell);
    } else if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: any = data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value;
    }
    return data?.[cell.key];
  }
}
