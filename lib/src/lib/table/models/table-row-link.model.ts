import { UrlTree } from '@angular/router';

/**
 * The link of a table row. It accepts what `routerLink` accepts.
 * Commands are resolved relative to the route of the table; pass a `UrlTree` to resolve them yourself.
 */
export type Lab900TableRowLink = string | UrlTree | readonly any[];

/**
 * The resolved link of one table row
 */
export interface Lab900TableResolvedRowLink {
  urlTree: UrlTree;
  /**
   * The url of the link, base href included
   */
  href: string;
  /**
   * Accessible name (translation key) of the tab stop
   */
  label?: string;
  /**
   * The keys of the columns whose cell is a part of the link. The first one is the tab stop of the row.
   */
  cellKeys: string[];
}
