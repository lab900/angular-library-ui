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
  inject,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { readPropValue } from '../../utils/utils';
import { TooltipPosition } from '@angular/material/tooltip';
import { Lab900TableService } from '../services/table.service';

@Directive()
export abstract class CellRendererAbstract<
  CellRenderOptions = any,
  T = unknown,
  V = unknown
> implements AfterViewInit, OnDestroy
{
  protected readonly elm: ElementRef<HTMLElement> = inject(ElementRef);
  protected readonly tableService = inject(Lab900TableService);
  protected readonly ngZone = inject(NgZone);

  private observer?: ResizeObserver;
  private observerSub?: Subscription;

  protected readonly _columnConfig$ = new ReplaySubject<TableCell<T>>();
  public readonly columnConfig$: Observable<TableCell<T, CellRenderOptions>> =
    this._columnConfig$
      .asObservable()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));

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

  @Input()
  public handleValueChanged?: (value: V, cell: TableCell<T>, row: T) => void;

  @ViewChild('.lab900-cell-value', { static: false, read: ElementRef })
  public cellInnerElm?: ElementRef;

  public readonly rendererOptions$: Observable<CellRenderOptions | undefined> =
    this.columnConfig$.pipe(
      map((config) => config.cellRenderOptions),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  public readonly cellValue$: Observable<V> = this.getCellValue();

  private readonly textOverflowing$ = new BehaviorSubject<boolean>(false);
  public readonly tooltip$: Observable<string | undefined> = combineLatest([
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
        return String(cellValue);
      }
      return undefined;
    })
  );

  public readonly tooltipPosition$: Observable<TooltipPosition> =
    this.columnConfig$.pipe(
      map(
        (cell) => cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'
      )
    );

  public ngAfterViewInit(): void {
    this.observeCellContentOverflow();
  }

  public ngOnDestroy(): void {
    this.observerSub?.unsubscribe();
    this.observer?.unobserve(this.elm.nativeElement);
  }

  protected getCellValue(): Observable<V> {
    const sources$ = {
      config: this.columnConfig$,
      data: this.data$,
      disableEditing: this.tableService.disableEditing$,
    };

    return combineLatest(sources$).pipe(
      map(({ config, data, disableEditing }) => {
        const value = this.cellFormatter(config, data);
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
      shareReplay({ bufferSize: 1, refCount: true })
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

  /**
   * Observe the cell content overflow and set the textOverflowing$ observable
   * @protected
   */
  protected observeCellContentOverflow(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer?.unobserve(this.elm.nativeElement);
      this.observer = new ResizeObserver((entries) => {
        const innerScrollWidth =
          this.elm.nativeElement.querySelector('.lab900-cell-value')
            ?.scrollWidth ?? 0;
        const maxWidth = (entries[0].target as any).offsetWidth;
        this.textOverflowing$.next(innerScrollWidth > maxWidth);
      });
      this.observer.observe(this.elm.nativeElement);
    });
  }
}
