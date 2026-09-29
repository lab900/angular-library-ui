import { IsActiveMatchOptions } from '@angular/router';

/**
 * One entry of a nav list: a route, an external link, or a parent of nested items.
 * An item without a route, a link or visible children is not shown.
 */
export interface NavItem {
  /** A translation key */
  label: string;
  icon?: Icon;
  /** The router link of the item */
  route?: string;
  /** The query params of the route */
  routeQueryParams?: Record<string, any>;
  /** An external link instead of a route */
  href?: { url: string; target?: '_self' | '_blank' };
  /** Nested items. A click on the parent expands them; the parent of the active route starts expanded. */
  children?: NavItem[];
  /** Show the children in an overlay instead of below the item, on screens wider than `allowOverlayMenuUntil` of the list */
  childrenInOverlay?: boolean;
  hide?: (() => boolean) | boolean;
  /** Called after the navigation to the route of the item has finished, for example to close a sidenav */
  navigationFinished?: (navigationResult: boolean | null) => void;
  /** When the item is active. Overrides the `routeMatchOptions` of the list. */
  routeMatchOptions?: IsActiveMatchOptions | { exact: boolean };
  /**
   * Will be automatically generated
   */
  uniqueId?: string;
}

/**
 * A group of nav items with an optional heading. A group without visible items is not shown.
 */
export interface NavItemGroup {
  /** A translation key for the heading of the group */
  label?: string;
  items: NavItem[];
  /** An icon next to the heading */
  icon?: Icon;
  hide?: (() => boolean) | boolean;
  /**
   * Will be automatically generated
   */
  uniqueId?: string;
}

/**
 * An icon of a nav item or group. Set `name` or `svgName`.
 */
export interface Icon {
  /** A Material icon name */
  name?: string;
  /** The name of an icon registered in the `MatIconRegistry` */
  svgName?: string;
  /** The side of the label that the icon is on */
  position?: 'left' | 'right';
}
