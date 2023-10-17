import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
  Subscription,
} from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { readPropValue } from '../../utils/utils';
import { TooltipPosition } from '@angular/material/tooltip';

@Directive()
export abstract class CellRendererAbstract<CellRenderOptions = any, T = any>
  implements AfterViewInit, OnDestroy
{
  public readonly cellValue$: Observable<any>;
  private observer?: ResizeObserver;
  private observerSub?: Subscription;

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

  @ViewChild('.lab900-cell-value', { static: false, read: ElementRef })
  public cellInnerElm: ElementRef;

  public readonly rendererOptions$: Observable<CellRenderOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config.cellRenderOptions),
      shareReplay(1)
    );

  private readonly textOverflowing$ = new BehaviorSubject<boolean>(false);
  public readonly tooltip$: Observable<string | undefined>;
  public readonly tooltipPosition$: Observable<TooltipPosition>;

  public constructor(private elm: ElementRef<HTMLElement>) {
    this.cellValue$ = this.getCellValue();

    this.tooltipPosition$ = this.columnConfig$.pipe(
      map(
        (cell) => cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'
      )
    );

    this.tooltip$ = combineLatest([
      this.columnConfig$,
      this.data$,
      this.cellValue$,
      this.textOverflowing$,
    ]).pipe(
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

  public ngAfterViewInit(): void {
    this.observeCellContentOverflow();
  }

  public ngOnDestroy(): void {
    this.observerSub?.unsubscribe();
    this.observer?.unobserve(this.elm.nativeElement);
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

  /**
   * Observe the cell content overflow and set the textOverflowing$ observable
   * @protected
   */
  protected observeCellContentOverflow(): void {
    this.observer?.unobserve(this.elm.nativeElement);
    this.observer = new ResizeObserver((entries) => {
      const innerScrollWidth =
        this.elm.nativeElement.querySelector('.lab900-cell-value')?.scrollWidth;
      const maxWidth = (entries[0].target as any).offsetWidth;
      this.textOverflowing$.next(innerScrollWidth > maxWidth);
    });
    this.observer.observe(this.elm.nativeElement);
  }
}
