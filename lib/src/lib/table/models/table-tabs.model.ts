import { TableCell } from './table-cell.model';

export interface Lab900TableTab<TabId = string, T extends object = object> {
  id: TabId;
  label: string;
  /**
   * Load a different config for a tab
   */
  tableCells?: TableCell<T>[];
}
