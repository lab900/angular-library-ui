import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { Directive, Input } from '@angular/core';
import { map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableCellComponent } from '../components/table-cell/table-cell.component';
import { isDifferent } from '../../utils/different.utils';
import { CellEditorBaseOptions } from './cell-editor.options';

@Directive()
export abstract class CellEditorAbstract<
  TCellEditorOptions extends CellEditorBaseOptions,
  T = any
> {
  public readonly cellValue$: Observable<any>;

  protected readonly _columnConfig$ = new ReplaySubject<
    TableCell<T, any, any, TCellEditorOptions>
  >();
  public readonly columnConfig$: Observable<
    TableCell<T, any, any, TCellEditorOptions>
  > = this._columnConfig$.asObservable().pipe(shareReplay(1));

  @Input({ required: true })
  public set columnConfig(value: TableCell<T, any, any, TCellEditorOptions>) {
    this._columnConfig$.next(value);
  }

  protected readonly _data$ = new ReplaySubject<T>();
  public readonly data$ = this._data$.asObservable();

  @Input({ required: true })
  public set data(value: T) {
    this._data$.next(value);
  }

  public readonly editOptions$: Observable<TCellEditorOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config?.cellEditorOptions),
      shareReplay(1)
    );

  public constructor(private readonly tableCell: Lab900TableCellComponent) {
    this.cellValue$ = this.getCellValue();
  }

  protected getCellValue(): Observable<any> {
    return combineLatest([this.columnConfig$, this.data$]).pipe(
      map(([config, data]) => this.getUnformattedValue(config, data)),
      shareReplay(1)
    );
  }

  protected getUnformattedValue(cell: TableCell<T>, data: T): any {
    if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: any = data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value;
    }
    return data?.[cell.key];
  }

  public close(currentValue?: any): void {
    if (currentValue) {
      this.cellValue$
        .pipe(take(1), withLatestFrom(this.editOptions$, this._data$))
        .subscribe(([oldValue, editOptions, data]) => {
          if (editOptions.valueChanged && isDifferent(currentValue, oldValue)) {
            editOptions.valueChanged(currentValue, data);
          }
          this.tableCell.showEditorForElement$.next(undefined);
        });
    } else {
      this.tableCell.showEditorForElement$.next(undefined);
    }
  }
}
