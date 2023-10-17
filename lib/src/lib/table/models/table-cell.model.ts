import { propValue } from '../../utils/utils';
import { TableCellTooltip } from './table-cell-tooltip.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { Type } from '@angular/core';
import { CellRendererAbstract } from '../directives/cell-renderer.abstract';
import { ColumnHeaderRendererAbstract } from '../directives/column-header-renderer-abstract.directive';

export interface TableCell<
  T = any,
  CellRenderOptions = any,
  HeaderRenderOptions = any
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
   * Cell header icon
   * @Deprecated use cellRenderer: ColumnHeaderWithIconRendererComponent instead
   */
  cellHeaderIcon?: propValue<TableCell<T>>;
  /**
   * Cell header svgicon
   * @Deprecated use cellRenderer: ColumnHeaderWithIconRendererComponent instead
   */
  cellHeaderSvgIcon?: propValue<TableCell<T>>;
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
  click?: (data: T, cell: TableCell, mouseEvent?: MouseEvent) => any;
  /**
   * render a different cell template
   * @deprecated use cellRenderer instead
   */
  customCellContent?: boolean;

  /**
   * Specify a custom cell renderer component to display the cell content in a different way
   */
  cellRenderer?: Type<CellRendererAbstract<CellRenderOptions, T>>;

  /**
   * Specify a renderer component specific options
   */
  cellRenderOptions?: CellRenderOptions;

  /**
   * render a different column header template
   * @deprecated use headerRenderer instead
   */
  customHeaderCell?: boolean;
  headerRenderer?: Type<ColumnHeaderRendererAbstract<HeaderRenderOptions, T>>;
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
  footer?: ((data: T[], cell: TableCell) => string) | string;
  footerCellClass?: string;

  /**
   * Cell prefixed icon, use cellFormatter to remove text if you want to only use the icon
   * @Deprecated use cellRenderer: CellWithIconRendererComponent  instead
   */
  icon?: (data: T, cell: TableCell) => string;
  /**
   * Cell prefixed SVG icon
   * @Deprecated use cellRenderer: CellWithIconRendererComponent  instead
   */
  svgIcon?: (data: T, cell: TableCell) => string;
}
