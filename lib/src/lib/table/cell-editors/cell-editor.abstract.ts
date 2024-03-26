import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
} from '@angular/core';
import { map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableCellComponent } from '../components/table-cell/table-cell.component';
import { isDifferent, updateObject } from '../../utils/different.utils';
import { CellEditorBaseOptions } from './cell-editor.options';

@Directive()
export abstract class CellEditorAbstract<
  TCellEditorOptions extends CellEditorBaseOptions,
  T = object,
  V = unknown
> implements AfterViewInit
{
  private readonly tableCell: Lab900TableCellComponent = inject(
    Lab900TableCellComponent
  );
  protected readonly elm: ElementRef<HTMLElement> = inject(ElementRef);

  protected readonly _columnConfig$ = new ReplaySubject<
    TableCell<T, any, any, TCellEditorOptions>
  >();

  public readonly columnConfig$: Observable<
    TableCell<T, any, any, TCellEditorOptions>
  > = this._columnConfig$
    .asObservable()
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

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

  @Input({ required: true })
  public handleValueChanged!: (value: V, cell: TableCell<T>, row: T) => void;

  public readonly editOptions$: Observable<TCellEditorOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config?.cellEditorOptions),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  public readonly placeholder$: Observable<string> = this.editOptions$.pipe(
    map((options) => options?.placeholder ?? '')
  );

  public readonly cellValue$: Observable<V> = this.getCellValue();

  public ngAfterViewInit(): void {
    this.focusAfterViewInit();
  }

  protected focusAfterViewInit(): void {
    const defaultInput =
      this.elm.nativeElement?.querySelector('.lab900-cell-input');
    if (defaultInput) {
      (defaultInput as HTMLInputElement).focus();
    }
  }

  protected getCellValue(): Observable<V> {
    return combineLatest([this.columnConfig$, this.data$]).pipe(
      map(([config, data]) => this.getUnformattedValue(config, data) ?? null),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  protected getUnformattedValue(cell: TableCell<T>, data: T): V {
    if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: unknown = data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value as V;
    }
    return data?.[cell.key as keyof T] as V;
  }

  public close(): void {
    this.resetTableCell();
  }

  public isDifferent(updatedValue: V, oldValue: V): boolean {
    return isDifferent(updatedValue, oldValue);
  }

  public closeAndSave(updatedValue: V, close = true): void {
    this.columnConfig$
      .pipe(take(1), withLatestFrom(this.cellValue$, this._data$))
      .subscribe(([config, oldValue, data]) => {
        if (this.isDifferent(updatedValue, oldValue)) {
          if (!this.handleValueChanged) {
            throw Error(
              `No handleValueChanged method provided for column ${config.key}`
            );
          }
          this.data = updateObject(config.key, updatedValue, data);
          this.handleValueChanged(updatedValue, config, data);
        }
        if (close) {
          this.resetTableCell();
        }
      });
  }

  private resetTableCell(): void {
    this.tableCell.closeEditor();
  }
}
