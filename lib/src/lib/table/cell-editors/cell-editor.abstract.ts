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

  public readonly placeholder$: Observable<string> = this.editOptions$.pipe(
    map((options) => options?.placeholder ?? '')
  );

  public constructor(private readonly tableCell: Lab900TableCellComponent) {
    this.cellValue$ = this.getCellValue();
  }

  protected getCellValue(): Observable<any> {
    return combineLatest([this.columnConfig$, this.data$]).pipe(
      map(([config, data]) => this.getUnformattedValue(config, data) ?? null),
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
    return data?.[cell.key as keyof T];
  }

  public close(currentValue?: any): void {
    if (currentValue) {
      this.cellValue$
        .pipe(take(1), withLatestFrom(this.columnConfig$, this._data$))
        .subscribe(([oldValue, config, data]) => {
          if (
            config.cellEditorOptions?.valueChanged &&
            isDifferent(currentValue, oldValue)
          ) {
            config.cellEditorOptions.valueChanged(
              currentValue,
              config.key,
              data
            );
          }
          this.resetTableCell();
        });
    } else {
      this.resetTableCell();
    }
  }

  private resetTableCell(): void {
    this.tableCell.closeEditor();
  }
}
