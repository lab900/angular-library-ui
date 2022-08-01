import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TooltipOptions } from '../../models/table-cell-tooltip.model';
import { TableCell } from '../../models/table-cell.model';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-table-cell-value',
  template: ` <span
    *ngIf="cell"
    matTooltipClass="lab900-table__mat-tooltip"
    [matTooltip]="getTooltipContent()"
    [matTooltipPosition]="getTooltipOptions().tooltipPosition"
  >
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    <mat-icon *ngIf="svgIcon" [svgIcon]="svgIcon"></mat-icon>
    <ng-container *ngIf="cellValue">
      <span #cellRef *ngIf="!cell.click">
        {{ cellValue | translate }}
      </span>
      <a
        #cellRef
        style="cursor: pointer"
        *ngIf="cell.click"
        (click)="cell.click(data, cell, $event)"
        matTooltipClass="lab900-table__mat-tooltip"
        [matTooltip]="getTooltipContent()"
        [matTooltipPosition]="getTooltipOptions().tooltipPosition"
      >
        {{ cellValue | translate }}
      </a>
    </ng-container>
  </span>`,
})
export class Lab900TableCellValueComponent<T = any> implements OnChanges, AfterViewInit {
  @Input()
  public data!: T;
  @Input()
  public cell!: TableCell<T>;
  @Input()
  public maxColumnWidthFromTable?: string;
  @ViewChild('cellRef')
  public cellRef: ElementRef;
  public cellValue: string;
  private isEllipsisActive = false;

  public icon: string;
  public svgIcon: string;

  public static getCellValue<T = any>(cell: TableCell<T>, data: T): string {
    if (cell.cellFormatter) {
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

  private static isEllipsisActive(e: any): boolean {
    return e == null ? false : e.offsetWidth < e.scrollWidth;
  }

  public ngAfterViewInit(): void {
    this.setMaxWidthAndOverflow();
    setTimeout(() => {
      // setTimeout to prevent ExpressionChangedAfterItWasCheckedException
      this.isEllipsisActive = Lab900TableCellValueComponent.isEllipsisActive(this.cellRef?.nativeElement);
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.data || changes.cell) && this.cell) {
      this.cellValue = Lab900TableCellValueComponent.getCellValue<T>(this.cell, this.data);
      this.icon = this.cell.icon(this.data, this.cell);
      this.svgIcon = this.cell.svgIcon(this.data, this.cell);
    }
  }

  public getTooltipContent(): string {
    // case: only table max width > show content only on overflow
    if (
      this.maxColumnWidthFromTable &&
      !this.cell.cellTooltip?.text &&
      (this.isEllipsisActive || this.cell.cellTooltip?.onlyOnOverflow === false)
    ) {
      return this.cellValue;
    }

    // case: TableCell tooltip text defined, but not onlyOnOverflow
    if (this.cell.cellTooltip?.text && !this.cell.cellTooltip?.onlyOnOverflow) {
      return readPropValue<T>(this.cell.cellTooltip?.text, this.data);
    }

    // case: TableCell tooltip on overflow
    // take cellValue if cellTooltip.text is not defined
    if (this.cell.cellTooltip?.onlyOnOverflow && this.isEllipsisActive) {
      return readPropValue<T>(this.cell.cellTooltip?.text, this.data) ?? this.cellValue;
    }

    return '';
  }

  public getTooltipOptions(): TooltipOptions {
    return {
      ...this.cell.cellTooltip?.tooltipOptions,
      tooltipPosition: this.cell.cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below',
    };
  }

  private setMaxWidthAndOverflow(): void {
    if (this.cellRef?.nativeElement && (this.cell.cellMaxWidth || this.maxColumnWidthFromTable)) {
      this.cellRef.nativeElement.style.maxWidth = readPropValue<T>(this.cell.cellMaxWidth, this.data) ?? this.maxColumnWidthFromTable;
      this.cellRef.nativeElement.style.overflow = 'hidden';
      this.cellRef.nativeElement.style.textOverflow = 'ellipsis';
      this.cellRef.nativeElement.style.display = 'block';
    }
  }
}
