export interface ExpandableRows<T = any> {
  /**
   * Rows expand when the table has a `lab900TableRowDetail` template.
   * Set this to false to turn expanding off without removing the template.
   * @default true
   */
  enabled?: boolean;
  /**
   * Allow more than one expanded row at a time.
   * With false, expanding a row collapses the other one.
   * @default true
   */
  multiple?: boolean;
  /**
   * Decide per row if it can expand. It is evaluated when the row renders.
   */
  isExpandable?: (row: T) => boolean;
  /**
   * Compare rows to find the expanded ones, for example when the data is fetched again as new objects.
   * @default strict equality
   */
  compareFn?: (o1: T, o2: T) => boolean;
}

export interface Lab900TableRowDetailContext<T = any> {
  $implicit: T;
  index: number;
  collapse: () => void;
}
