import { TooltipPosition } from '@angular/material/tooltip';
import { propValue } from '../../utils/utils';

export interface TableCellTooltip<T = any> {
  /**
   * Text that is displayed in the tooltip, can be dependant on data
   */
  text?: propValue<T>;
  /**
   * If true, tooltip will only show when it the content of the cell is cut off (by setting TableCell.cellMaxWidth
   * value)
   * @Default false
   */
  onlyOnOverflow?: propValue<T, boolean>;
  /**
   * Currently ony supports positioning option of matTooltip
   */
  matTooltipOptions?: {
    matTooltipPosition: TooltipPosition;
  };
}

export interface MatTooltipOptions {
  tooltipPosition?: TooltipPosition;
}
