import { propValue } from '../../utils/utils';

export interface TableCellTooltip<T = unknown> {
  /**
   * Text that is displayed in the tooltip, can be dependent on data
   */
  text?: propValue<T>;
  /**
   * If true, tooltip will only show when it is the content of the cell is cut off (by setting TableCell.cellMaxWidth
   * value)
   * @Default false
   */
  onlyOnOverflow?: propValue<T, boolean>;
  /**
   * Currently ony supports positioning option of matTooltip
   */
  tooltipOptions?: {
    tooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
  };
}

export interface TooltipOptions {
  tooltipPosition?: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
}
