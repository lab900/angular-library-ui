import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { NavItem, NavItemGroup } from '../../models/nav-item.model';
import { IsActiveMatchOptions } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { Breakpoints } from '@angular/cdk/layout';
import { MatNavList } from '@angular/material/list';

const hide = (i: { hide?: (() => boolean) | boolean }): boolean => {
  return typeof i?.hide === 'function' ? i.hide() : (i?.hide ?? false);
};

let uniqueIdCounter = 0;
const uniqueIds = new WeakMap<NavItem | NavItemGroup, string>();

/**
 * The id belongs to the config object, so a recompute keeps the ids and the @for loops keep their views.
 */
const uniqueId = (source: NavItem | NavItemGroup): string => {
  let id = uniqueIds.get(source);
  if (!id) {
    id = `${++uniqueIdCounter}`;
    uniqueIds.set(source, id);
  }
  return id;
};

/**
 * A navigation menu of grouped items, with nested levels. Hidden items and empty groups are left out.
 */
@Component({
  selector: 'lab900-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, TranslatePipe, NavItemComponent, MatNavList],
})
export class Lab900NavListComponent {
  public readonly navItemGroups = input.required<NavItemGroup[]>();
  /** Indent nested items by their level */
  public readonly indentLevels = input<boolean>(true);
  /** Show an arrow on items with children, which shows whether they are expanded */
  public readonly showLevelArrows = input<boolean>(false);
  /**
   * Media queries, for example the CDK `Breakpoints`, where items with `childrenInOverlay` expand below the item
   * instead of in an overlay
   */
  public readonly allowOverlayMenuUntil = input<string | string[]>(Breakpoints.XSmall);
  /**
   * When an item is active. An item can override it. Without it, an item is active on its route and the routes
   * below it (`{ exact: false }`).
   */
  public readonly routeMatchOptions = input<IsActiveMatchOptions | { exact: boolean } | undefined>(undefined);

  public readonly filteredNavItemGroups = computed<NavItemGroup[]>(() => {
    const groups = this.navItemGroups();
    return groups
      .filter(g => !hide(g))
      .map(g => ({ ...g, items: this.filterNavItems(g.items ?? []), uniqueId: uniqueId(g) }))
      .filter(g => !!g.items.length);
  });

  private filterNavItems(items: NavItem[]): NavItem[] {
    return items
      .filter(i => !hide(i))
      .map(i => {
        const item: NavItem = { ...i, uniqueId: uniqueId(i) };
        if (i?.children?.length) {
          item.children = this.filterNavItems(i.children);
        }
        return item;
      })
      .filter(i => !!i?.children?.length || i?.route || i?.href);
  }
}
