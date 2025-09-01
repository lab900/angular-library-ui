import { IsActiveMatchOptions } from '@angular/router';

export interface NavItem {
  label: string;
  icon?: Icon;
  route?: string;
  routeQueryParams?: Record<string, any>;
  href?: { url: string; target?: '_self' | '_blank' };
  children?: NavItem[];
  childrenInOverlay?: boolean;
  hide?: (() => boolean) | boolean;
  navigationFinished?: (navigationResult: boolean | null) => void;
  routeMatchOptions?: IsActiveMatchOptions | { exact: boolean };
  /**
   * Will be automatically generated
   */
  uniqueId?: string;
}

export interface NavItemGroup {
  label?: string;
  items: NavItem[];
  icon?: Icon;
  hide?: (() => boolean) | boolean;
  /**
   * Will be automatically generated
   */
  uniqueId?: string;
}

export interface Icon {
  name?: string;
  svgName?: string;
  position?: 'left' | 'right';
}
