import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { Directive, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { readPropValue } from '../../utils/utils';
import { TooltipPosition } from '@angular/material/tooltip';
import { Lab900TableService } from '../services/table.service';

@Directive()
export abstract class CellRendererAbstract<CellRenderOptions = any, T = any> {
  public readonly cellValue$: Observable<any>;
  public readonly cellValueWithoutPlaceholder$: Observable<any>;

  protected readonly _columnConfig$ = new ReplaySubject<TableCell<T>>();
  public readonly columnConfig$: Observable<TableCell<T, CellRenderOptions>> =
    this._columnConfig$.asObservable().pipe(shareReplay(1));

  @Input({ required: true })
  public set columnConfig(value: TableCell<T, CellRenderOptions>) {
    this._columnConfig$.next(value);
  }

  protected readonly _data$ = new ReplaySubject<T>();
  public readonly data$ = this._data$.asObservable().pipe(shareReplay(1));

  @Input({ required: true })
  public set data(value: T) {
    this._data$.next(value);
  }

  @Input()
  public handleValueChanged?: (value: any, cell: TableCell<T>, row: T) => void;

  @ViewChild('.lab900-cell-value', { static: false, read: ElementRef })
  public cellInnerElm?: ElementRef;

  public readonly rendererOptions$: Observable<CellRenderOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config.cellRenderOptions),
      shareReplay(1)
    );

  /**
   * Calculating this value is expensive and should only be done when necessary
   * This should only be set in the specific renderers as it's most likely not needed in all
   * @protected
   */
  protected readonly textOverflowing$ = new BehaviorSubject<boolean>(false);

  public readonly tooltip$: Observable<string | undefined>;
  public readonly tooltipPosition$: Observable<TooltipPosition>;

  public constructor(
    protected readonly elm: ElementRef<HTMLElement>,
    protected readonly tableService: Lab900TableService,
    protected readonly ngZone: NgZone
  ) {
    this.cellValueWithoutPlaceholder$ = this.getCellValue();
    this.cellValue$ = this.getCellValueWithPlaceholder();

    this.tooltipPosition$ = this.columnConfig$.pipe(
      map(
        (cell) => cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'
      )
    );

    this.tooltip$ = combineLatest([
      this.columnConfig$,
      this.data$,
      this.cellValueWithoutPlaceholder$,
      this.textOverflowing$.asObservable().pipe(distinctUntilChanged()),
    ]).pipe(
      debounceTime(100),
      map(([config, data, cellValue, textOverflowing]) => {
        if (
          config.cellTooltip?.text &&
          (!config.cellTooltip?.onlyOnOverflow || textOverflowing)
        ) {
          return readPropValue(config.cellTooltip.text, data);
        } else if (textOverflowing) {
          return cellValue;
        }
        return undefined;
      })
    );
  }

  protected getCellValue(): Observable<any> {
    return combineLatest([this.columnConfig$, this.data$]).pipe(
      map(([config, data]) => this.cellFormatter(config, data)),
      shareReplay(1)
    );
  }

  protected getCellValueWithPlaceholder(): Observable<any> {
    return combineLatest([
      this.columnConfig$,
      this.cellValueWithoutPlaceholder$,
      this.data$,
      this.tableService.disableEditing$,
    ]).pipe(
      map(([config, value, data, disableEditing]) => {
        if (
          !value &&
          config.cellEditorOptions?.placeholder &&
          !disableEditing &&
          !config.cellEditorOptions?.disablePlaceholderOutsideEditor &&
          !config.cellEditorOptions?.disabled?.(data)
        ) {
          this.elm.nativeElement
            .querySelector('.lab900-cell-value')
            ?.classList.add('value-is-placeholder');
          return config.cellEditorOptions?.placeholder;
        }
        this.elm.nativeElement
          .querySelector('.lab900-cell-value')
          ?.classList.remove('value-is-placeholder');
        return value;
      }),
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
    return data?.[cell.key as keyof T];
  }
}
