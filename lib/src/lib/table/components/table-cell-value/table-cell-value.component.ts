import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';
import { delay, filter, map, tap, shareReplay } from 'rxjs/operators';
import { TooltipPosition } from '@angular/material/tooltip';
import { readPropValue } from '../../../utils/utils';
import { AfterViewInit } from '@angular/core/core';
import { BehaviorSubject } from 'rxjs';

function cellFormatter(cell: TableCell, data: any): string {
  if (cell?.cellFormatter) {
    return cell.cellFormatter(data, cell);
  } else if (cell.key.includes('.')) {
    const keys = cell.key.split('.');
    let value: any = data;
    for (const key of keys) {
      value = value?.[key] ?? '';
    }
    return value;
  }
  return data?.[cell.key] ?? '';
}

@Component({
  selector: 'lab900-table-cell-value[cell][data]',
  templateUrl: './table-cell-value.component.html',
})
export class Lab900TableCellValueComponent<T = any> implements OnDestroy, AfterViewInit {
  @Input()
  public set cell(value: TableCell<T>) {
    this._cell$.next(value);
  }

  @Input()
  public set data(value: T) {
    this._data$.next(value);
  }
  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  private readonly _data$ = new ReplaySubject<T>();

  public readonly cell$: Observable<TableCell<T>> = this._cell$.asObservable().pipe(shareReplay(1));
  public readonly data$: Observable<T> = this._data$.asObservable().pipe(shareReplay(1));

  public readonly cellValue$: Observable<string>;
  public readonly icon$: Observable<string | null>;
  public readonly svgIcon$: Observable<string | null>;
  public tooltip$: Observable<string>;
  public tooltipPosition$: Observable<TooltipPosition>;
  public viewTooltip: boolean | null = null;
  public maxWidth$: Observable<string>;

  @Input()
  public maxColumnWidthFromTable?: string;

  public constructor() {
    const streams = combineLatest([this.cell$, this.data$]);
    this.icon$ = streams.pipe(
      filter(([cell]) => !!cell?.icon),
      map(([cell, data]) => cell.icon(data, cell)),
    );
    this.svgIcon$ = streams.pipe(
      filter(([cell]) => !!cell?.svgIcon),
      map(([cell, data]) => cell.svgIcon(data, cell)),
    );
    this.cellValue$ = streams.pipe(map(([cell, data]) => cellFormatter(cell, data)));
    this.maxWidth$ = streams.pipe(map(([cell, data]) => this.maxWidth(cell, data)));
  }

  public ngAfterViewInit(): void {
    this.tooltip$ = combineLatest([this.cell$, this.data$, this.cellValue$]).pipe(
      map(([cell, data, value]) => this.getTooltipContent(cell, data, value)),
      filter((content) => !!content?.length),
    );
    this.tooltipPosition$ = this.cell$.pipe(map((cell) => cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'));
  }

  public checkWidth(event): void {
    const el = event.target;
    if (this.viewTooltip == null) {
      this.viewTooltip = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    }
  }

  public maxWidth({ cellMaxWidth }: TableCell<T>, data: T): string {
    return readPropValue<T>(cellMaxWidth, data) ?? this.maxColumnWidthFromTable;
  }

  public getTooltipContent({ cellTooltip }: TableCell<T>, data: T, value: string): string {
    // case: only table max width > show content only on overflow
    if (this.maxColumnWidthFromTable && !cellTooltip?.text) {
      return value;
    }
    // case: TableCell tooltip text defined, but not onlyOnOverflow
    if (cellTooltip?.text && !cellTooltip?.onlyOnOverflow) {
      return readPropValue<T>(cellTooltip?.text, data);
    }
    // case: TableCell tooltip on overflow
    // take cellValue if cellTooltip.text is not defined
    if (cellTooltip?.onlyOnOverflow) {
      return readPropValue<T>(cellTooltip?.text, data) ?? value;
    }
    return '';
  }

  public ngOnDestroy(): void {}
}
