import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { MergerItemComponent } from '../abstracts/custom-component.abstract';

/**
 * A property to show. It is also the type of the fields in `nestedObject`.
 */
export interface MergeConfigBase {
  /** The property of the object */
  attribute?: string;
  /** A translation key, shown next to the value */
  label?: string;
  /** Turns the value into the text of the row. It can return an observable. */
  formatter?: (data: any) => Observable<string> | string;
}

/**
 * One row of the merger
 */
export interface MergeConfig<T> extends MergeConfigBase {
  /** CSS classes on the row */
  rowClass?: string;
  /** Show the value below the label instead of next to it */
  nextLine?: boolean;
  /** Merge the value of the other side. The user sets it with the arrow of the row; set it to start merged. */
  active?: boolean;
  /** A component that shows the row instead of the label and value. It receives the whole object as `data`. */
  component?: Type<MergerItemComponent<T>>;
  /**
   * Fields shown together in one row and merged together. With an `attribute` the fields are properties of that
   * object property, and the whole object is merged. Without it they are top-level properties.
   */
  nestedObject?: MergeConfigBase[];
  /** Merge an array property by joining both arrays instead of replacing one */
  combine?: boolean;
  /** The user cannot change `active`, and a reset keeps it */
  disabled?: boolean;
}
