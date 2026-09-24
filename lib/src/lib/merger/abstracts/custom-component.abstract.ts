import { Signal } from '@angular/core';

/**
 * Contract for a custom component that shows the value of a merge config.
 * The merger sets the data with setInput, so a signal input and a decorator input are both possible.
 */
export interface MergerItemComponent<T = any> {
  /** The whole object of the side that the component is on */
  data?: T | Signal<T | undefined>;
}
