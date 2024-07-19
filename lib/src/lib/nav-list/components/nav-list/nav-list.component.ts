import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NavItem, NavItemGroup } from '../../models/nav-item.model';
import { IsActiveMatchOptions } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { Breakpoints } from '@angular/cdk/layout';

const hide = (i: { hide?: (() => boolean) | boolean }): boolean => {
  return typeof i?.hide === 'function' ? i.hide() : i?.hide ?? false;
};

@Component({
  selector: 'lab900-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconComponent, TranslateModule, MatListModule, NavItemComponent],
})
export class Lab900NavListComponent {
  public readonly navItemGroups = input.required<NavItemGroup[]>();
  public readonly indentLevels = input<boolean>(true);
  public readonly showLevelArrows = input<boolean>(false);
  public readonly allowOverlayMenuUntil = input<string | string[]>(
    Breakpoints.XSmall,
  );
  public readonly routeMatchOptions = input<
    IsActiveMatchOptions | { exact: boolean } | undefined
  >(undefined);

  public readonly filteredNavItemGroups = computed(() => {
    const groups = this.navItemGroups();
    return groups
      .filter((g) => !hide(g))
      .map((g) => {
        g.items = this.filterNavItems(g.items);
        return g;
      })
      .filter((g) => !!g.items?.length);
  });

  private filterNavItems(items: NavItem[]): NavItem[] {
    return [...items]
      .filter((i) => !hide(i))
      .map((i) => {
        if (i?.children?.length) {
          i.children = this.filterNavItems(i.children);
        }
        return i;
      })
      .filter((i) => !!i?.children?.length || i?.route || i?.href);
  }
}
