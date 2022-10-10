import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';
import { delay, filter, map, shareReplay } from 'rxjs/operators';
import { TooltipPosition } from '@angular/material/tooltip';
import { readPropValue } from '../../../utils/utils';

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
  template: ` <div
    *ngIf="cell$ | async as cell"
    matTooltipClass="lab900-table__mat-tooltip"
    [matTooltip]="tooltip$ | async"
    [matTooltipPosition]="tooltipPosition$ | async"
  >
    <mat-icon *ngIf="icon$ | async as icon">{{ icon }}</mat-icon>
    <mat-icon *ngIf="svgIcon$ | async as icon" [svgIcon]="icon"></mat-icon>
    <ng-container *ngIf="cellValue$ | async as cellValue">
      <span #cellRef *ngIf="!cell.click">
        {{ cellValue | translate }}
      </span>
      <ng-container *ngIf="cell.click">
        <a
          #cellRef
          style="cursor: pointer"
          *ngIf="data$ | async as data"
          (click)="cell.click(data, cell, $event)"
          matTooltipClass="lab900-table__mat-tooltip"
          [matTooltip]="tooltip$ | async"
          [matTooltipPosition]="tooltipPosition$ | async"
        >
          {{ cellValue | translate }}
        </a>
      </ng-container>
    </ng-container>
  </div>`,
})
export class Lab900TableCellValueComponent<T = any> implements OnDestroy {
  @Input()
  public set cell(value: TableCell<T>) {
    this._cell$.next(value);
  }

  @Input()
  public set data(value: T) {
    this._data$.next(value);
  }

  @ViewChild('cellRef')
  public set cellRef(value: ElementRef) {
    if (value?.nativeElement) {
      this.cellElement$.next(value.nativeElement);
    }
  }
  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  private readonly _data$ = new ReplaySubject<T>();

  public readonly cell$: Observable<TableCell<T>> = this._cell$.asObservable().pipe(shareReplay(1));
  public readonly data$: Observable<T> = this._data$.asObservable().pipe(shareReplay(1));

  public readonly cellValue$: Observable<string>;
  public readonly icon$: Observable<string | null>;
  public readonly svgIcon$: Observable<string | null>;
  public readonly tooltip$: Observable<string>;
  public readonly tooltipPosition$: Observable<TooltipPosition>;

  private readonly cellElement$ = new ReplaySubject<any>();
  private readonly isEllipsisActive$: Observable<boolean>;
  private cellElementSub: Subscription;

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
    this.isEllipsisActive$ = this.cellElement$.pipe(map((e) => e.offsetWidth < e.scrollWidth));
    this.cellElementSub = combineLatest([this.cell$, this.cellElement$]).subscribe(([cell, cellElement]) => {
      if (cellElement && this.maxColumnWidthFromTable) {
        cellElement.style.maxWidth = readPropValue<T>(cell.cellMaxWidth, this.data) ?? this.maxColumnWidthFromTable;
        cellElement.style.overflow = 'hidden';
        cellElement.style.textOverflow = 'ellipsis';
        cellElement.style.display = 'block';
      }
    });

    this.tooltip$ = combineLatest([this.cell$, this.data$, this.cellValue$, this.isEllipsisActive$]).pipe(
      delay(1),
      map(([cell, data, value, isEllipsisActive]) => this.getTooltipContent(cell, data, value, isEllipsisActive)),
      filter((content) => !!content?.length),
      shareReplay(1),
    );
    this.tooltipPosition$ = this.cell$.pipe(
      map((cell) => cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'),
      shareReplay(1),
    );
  }

  public getTooltipContent({ cellTooltip }: TableCell<T>, data: T, value: string, isEllipsisActive: boolean): string {
    // case: only table max width > show content only on overflow
    if (this.maxColumnWidthFromTable && !cellTooltip?.text && (isEllipsisActive || cellTooltip?.onlyOnOverflow === false)) {
      return value;
    }
    // case: TableCell tooltip text defined, but not onlyOnOverflow
    if (cellTooltip?.text && !cellTooltip?.onlyOnOverflow) {
      return readPropValue<T>(cellTooltip?.text, data);
    }
    // case: TableCell tooltip on overflow
    // take cellValue if cellTooltip.text is not defined
    if (cellTooltip?.onlyOnOverflow && isEllipsisActive) {
      return readPropValue<T>(cellTooltip?.text, data) ?? value;
    }
    return '';
  }

  public ngOnDestroy(): void {
    this.cellElementSub.unsubscribe();
  }
}
