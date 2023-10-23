import { CellValueChangeEvent } from '../models/table-cell.model';

export interface CellEditorBaseOptions<T = any> {
  valueChanged: (event: CellValueChangeEvent<T>) => void;
  disabled?: (data?: T) => boolean;
  placeholder?: string;
  /**
   * Don't display the placeholder in the normal view when no value is present
   */
  disablePlaceholderOutsideEditor?: boolean;
  /**
   * The min width a cell should get when in edit mode
   * Will default to the current width of the cell if not provided
   */
  editCellMinWidth?: number;
}
