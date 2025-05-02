import { propValue } from '../../utils/utils';
import { TableCellTooltip } from './table-cell-tooltip.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { Signal, Type } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderers/cell-renderer.abstract';
import { ColumnHeaderRendererAbstract } from '../column-header-renderers/column-header-renderer-abstract.directive';
import { CellEditorAbstract } from '../cell-editors/cell-editor.abstract';
import { CellEditorBaseOptions } from '../cell-editors/cell-editor.options';

export interface CellValueChangeEvent<T = any> {
  value: any;
  cell: TableCell<T>;
  row: T;
}

export interface TableCell<
  T = any,
  CellRenderOptions = any,
  HeaderRenderOptions = any,
  CellEditorOptions extends CellEditorBaseOptions = CellEditorBaseOptions,
> {
  /**
   * Column key
   */
  key: string;
  /**
   * Column header label
   */
  label: propValue<TableCell>;
  /**
   * Custom cell class
   */
  cellClass?: ((data: T, cell: TableCell) => string) | string;
  /**
   * Custom cell header class
   */
  cellHeaderClass?: propValue<TableCell<T>>;
  /**
   * Custom formatter to display data inside the cell
   */
  cellFormatter?: (data: T, cell: TableCell) => string;
  /**
   * Should show column in the table
   */
  hide?: boolean;
  /**
   * Order of the column in the table
   * Sorted fields will come before non-sorted fields
   */
  columnOrder?: number;
  /**
   * Can't hide the column
   */
  alwaysVisible?: boolean;
  /**
   * Column is sortable
   */
  sortable?: boolean;
  /**
   * sort key to be used
   * defaults to `key` if not defined
   */
  sortKey?: string;
  /**
   * Column is sticky
   */
  sticky?: boolean;
  /**
   * Column width
   */
  width?: string;
  /**
   * on click
   */
  click?: (data: T, cell: TableCell, mouseEvent?: MouseEvent) => unknown;

  /**
   * Specify a custom cell renderer component to display the cell content in a different way
   */
  cellRenderer?: Type<CellRendererAbstract<CellRenderOptions, T>>;

  /**
   * Specify cellRenderer component specific options
   */
  cellRenderOptions?: CellRenderOptions;

  cellEditor?: Type<CellEditorAbstract<CellEditorOptions, T>>;
  cellEditorOptions?: CellEditorOptions;

  /**
   * Specify a custom header renderer component to display the column header content in a different way
   */
  headerRenderer?: Type<ColumnHeaderRendererAbstract<HeaderRenderOptions, T>>;

  /**
   * Specify headerRenderer component specific options
   */
  headerRenderOptions?: HeaderRenderOptions;

  /**
   * Enable a tooltip for cell header, takes text to be displayed
   */
  cellHeaderTooltip?: string;
  /**
   * Define the position for the cell header tooltip
   */
  cellHeaderTooltipPosition?: TooltipPosition;
  /**
   * Enable a tooltip, displays the cell content in a tooltip
   */
  cellTooltip?: TableCellTooltip<T>;
  /**
   * set max width of column, this will cause the content to overflow
   * @example: '300px'
   */
  cellMaxWidth?: string;
  /**
   * Cell footer to be displayed
   */
  footer?: ((data: T[], cell: TableCell) => string | Signal<string>) | string | Signal<string>;
  footerLoading?: Signal<boolean>;
  footerCellClass?: string;
}
