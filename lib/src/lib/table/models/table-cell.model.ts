import { propValue } from '../../utils/utils';
import { TableCellTooltip } from './table-cell-tooltip.model';

export interface TableCell<T = any> {
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
  cellClass?: propValue<[T, TableCell<T>]>;
  /**
   * Custom cell header class
   */
  cellHeaderClass?: propValue<TableCell<T>>;
  /**
   * Cell header icon
   */
  cellHeaderIcon?: propValue<TableCell<T>>;
  /**
   * Cell header svgicon
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
  click?: (data: T, cell: TableCell) => any;
  /**
   * render a different cell template
   */
  customCellContent?: boolean;
  /**
   * Enable a tooltip, displays the cell content in a tooltip
   */
  cellTooltip?: TableCellTooltip<T>;
  /**
   * set max width of column, this will cause the content to overflow
   * @example: '300px'
   */
  cellMaxWidth?: propValue<T>;
  /**
   * Cell footer to be displayed
   */
  footer?: ((data: T[], cell: TableCell) => string) | string;
  footerCellClass?: string;
}
