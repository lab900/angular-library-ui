import { Component, EventEmitter, HostBinding, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { MatColumnDef } from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import { Lab900Sort } from '../../models/table-sort.model';
import { Lab900TableCustomHeaderCellDirective } from '../../directives/table-custom-header-cell.directive';

@Component({
  selector: 'lab900-table-cell',
  templateUrl: './table-cell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> {
  @HostBinding()
  public className = 'lab900-table-cell';

  @ViewChild(MatColumnDef, { static: true })
  public columnDef!: MatColumnDef;

  // tslint:disable-next-line:variable-name
  private _cell: TableCell<T>;

  get cell(): TableCell<T> {
    return this._cell;
  }

  @Input()
  set cell(value: TableCell<T>) {
    this._cell = value;
    if (value?.key) {
      this.columnDef.name = this._cell.key;
      this.cellHeaderClass = this.getCellHeaderClass();
      this.cellHeaderIcon = this.getCellHeaderIcon();
      this.cellHeaderSvgIcon = this.getCellHeaderSvgIcon();
      this.cellLabel = this.getCellLabel();
    }
  }

  @Input()
  public sort: Lab900Sort[] = [];

  @Input()
  public customCellContent?: Lab900TableCustomCellDirective;

  @Input()
  public customHeaderCell?: Lab900TableCustomHeaderCellDirective;

  @Input()
  public data: T[];

  /**
   * max column width, set by table input
   */
  @Input()
  public maxColumnWidthFromTable?: string;

  @Output()
  public headerClick = new EventEmitter<TableCell<T>>();

  public cellClass: string;
  public cellHeaderClass: string;
  public cellHeaderIcon: string;
  public cellHeaderSvgIcon: string;
  public cellLabel: string;

  public get sortDirection(): SortDirection {
    return (this.sort || []).find((s) => s.id === this.cell.key)?.direction ?? '';
  }

  public get sortIcon(): string {
    if (this.sortDirection === 'asc') {
      return 'north';
    } else if (this.sortDirection === 'desc') {
      return 'south';
    }
  }

  public getCellClass(data: T): string {
    return typeof this.cell.cellClass === 'function'
      ? (this.cell.cellClass as (data: T, cell: TableCell) => string)(data, this.cell)
      : this.cell.cellClass;
  }

  public getCellLabel(): string {
    return readPropValue<TableCell<T>>(this.cell.label, this.cell);
  }

  public getCellHeaderClass(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderClass, this.cell);
  }

  public getCellHeaderIcon(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderIcon, this.cell);
  }

  public getCellHeaderSvgIcon(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderSvgIcon, this.cell);
  }

  public getCellFooter(): string {
    if (this.cell.footer) {
      if (typeof this.cell.footer === 'function') {
        return this.cell.footer(this.data, this.cell);
      }
      return this.cell.footer;
    }
  }
}
