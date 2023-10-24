import { CellValueChangeEvent } from '../models/table-cell.model';

export interface CellEditorBaseOptions<T = any> {
  /**
   * Callback when the value of the editor changes
   * Can also be handled globally via the table @Output (cellValueChanged)
   * @param event
   */
  valueChanged?: (event: CellValueChangeEvent<T>) => void;
  /**
   * Disable the editor based on the row data
   * Can also be done globally via the table @Input (disabledEditing)
   * @param data: the entire row data
   */
  disabled?: (data?: T) => boolean;
  /**
   * Show a placeholder when no value is present
   */
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
