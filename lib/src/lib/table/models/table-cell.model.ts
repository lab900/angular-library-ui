import { propValue } from '../../utils/utils';
import { TableCellTooltip } from './table-cell-tooltip.model';
import { TooltipPosition } from '@angular/material/tooltip';

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
  cellClass?: ((data: T, cell: TableCell) => string) | string;
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
  click?: (data: T, cell: TableCell, mouseEvent?: MouseEvent) => any;
  /**
   * render a different cell template
   */
  customCellContent?: boolean;
  /**
   * render a different column header template
   */
  customHeaderCell?: boolean;
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
  cellMaxWidth?: propValue<T>;
  /**
   * Cell footer to be displayed
   */
  footer?: ((data: T[], cell: TableCell) => string) | string;
  footerCellClass?: string;

  /**
   * Cell prefixed icon, use cellFormatter to remove text if you want to only use the icon
   */
  icon?: (data: T, cell: TableCell) => string;
  /**
   * Cell prefixed SVG icon
   */
  svgIcon?: (data: T, cell: TableCell) => string;
}
