import { Directive, input } from '@angular/core';
import { Lab900TableRowDetailContext } from '../models/table-expandable-rows.model';

/**
 * Content of an expanded row. The table renders it below the row, over the full width of the table.
 * @example
 * <ng-template lab900TableRowDetail [lab900TableRowDetailOf]="data" let-row let-index="index">
 *   <app-row-detail [row]="row" />
 * </ng-template>
 */
@Directive({
  selector: '[lab900TableRowDetail]',
  standalone: true,
})
export class Lab900TableRowDetailDirective<T = any> {
  /**
   * Only used to type the template context, pass the same data as the table.
   */
  public readonly lab900TableRowDetailOf = input<T[] | null | undefined>(undefined);

  public static ngTemplateContextGuard<T>(
    _dir: Lab900TableRowDetailDirective<T>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- the parameter only exists for the type predicate
    ctx: unknown
  ): ctx is Lab900TableRowDetailContext<T> {
    return true;
  }
}
