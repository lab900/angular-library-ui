import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { NavItem, NavItemGroup } from '../../models/nav-item.model';
import { IsActiveMatchOptions } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { Breakpoints } from '@angular/cdk/layout';
import { MatNavList } from '@angular/material/list';
import { uniqueId } from 'lodash';

const hide = (i: { hide?: (() => boolean) | boolean }): boolean => {
  return typeof i?.hide === 'function' ? i.hide() : (i?.hide ?? false);
};

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
  public readonly indentLevels = input<boolean>(true);
  public readonly showLevelArrows = input<boolean>(false);
  public readonly allowOverlayMenuUntil = input<string | string[]>(Breakpoints.XSmall);
  public readonly routeMatchOptions = input<IsActiveMatchOptions | { exact: boolean } | undefined>(undefined);

  public readonly filteredNavItemGroups = computed<NavItemGroup[]>(() => {
    const groups = this.navItemGroups();
    return groups
      .filter(g => !hide(g))
      .map(g => {
        g.items = this.filterNavItems(g.items);
        return { ...g, uniqueId: uniqueId() };
      })
      .filter(g => !!g.items?.length);
  });

  private filterNavItems(items: NavItem[]): NavItem[] {
    return [...items]
      .filter(i => !hide(i))
      .map(i => {
        if (i?.children?.length) {
          i.children = this.filterNavItems(i.children);
        }
        return { ...i, uniqueId: uniqueId() };
      })
      .filter(i => !!i?.children?.length || i?.route || i?.href);
  }
}
