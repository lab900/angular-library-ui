import { SortDirection } from '@angular/material/sort';

export interface Lab900Sort {
  /** The id of the column being sorted. */
  id: string;
  /** The sort direction. */
  direction: SortDirection;
}
