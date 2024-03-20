import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableCellComponent } from '../components/table-cell/table-cell.component';
import { isDifferent } from '../../utils/different.utils';
import { CellEditorBaseOptions } from './cell-editor.options';

@Directive()
export abstract class CellEditorAbstract<
  TCellEditorOptions extends CellEditorBaseOptions,
  T = any
> implements AfterViewInit
{
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

  @Input({ required: true })
  public handleValueChanged!: (value: any, cell: TableCell<T>, row: T) => void;

  public readonly editOptions$: Observable<TCellEditorOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config?.cellEditorOptions),
      shareReplay(1)
    );

  public readonly placeholder$: Observable<string> = this.editOptions$.pipe(
    map((options) => options?.placeholder ?? '')
  );

  public constructor(
    private readonly tableCell: Lab900TableCellComponent,
    protected readonly elm: ElementRef<HTMLElement>
  ) {
    this.cellValue$ = this.getCellValue();
  }

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

  public close(): void {
    this.resetTableCell();
  }

  public closeAndSave(updatedValue: any, close = true): void {
    this.columnConfig$
      .pipe(take(1), withLatestFrom(this.cellValue$, this._data$))
      .subscribe(([config, oldValue, data]) => {
        if (isDifferent(updatedValue, oldValue)) {
          if (!this.handleValueChanged) {
            throw Error(
              `No handleValueChanged method provided for column ${config.key}`
            );
          }
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
