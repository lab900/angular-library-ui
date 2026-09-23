/**
 * One side of the merger
 */
export interface MergeObject<T> {
  /** The object to compare */
  data: T;
  /** The heading above this side */
  title: string;
}
