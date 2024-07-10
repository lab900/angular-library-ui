import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { NavItem, NavItemGroup } from '../../models/nav-item.model';
import { IsActiveMatchOptions } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { NavItemComponent } from '../nav-item/nav-item.component';

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
  imports: [
    AsyncPipe,
    IconComponent,
    TranslateModule,
    MatListModule,
    NavItemComponent,
  ],
})
export class Lab900NavListComponent {
  private readonly _navItemGroups$ = new ReplaySubject<NavItemGroup[]>();
  public readonly filtersGroups$: Observable<NavItemGroup[]> =
    this._navItemGroups$.asObservable().pipe(
      map(([...groups]) => {
        return groups
          .filter((g) => !hide(g))
          .map((g) => {
            g.items = this.filterNavItems(g.items);
            return g;
          })
          .filter((g) => !!g.items?.length);
      }),
    );

  @Input({ required: true })
  public set navItemGroups(value: NavItemGroup[]) {
    this._navItemGroups$.next(value);
  }

  @Input()
  public indentLevels = true;

  @Input()
  public showLevelArrows = false;

  @Input()
  public allowOverlayMenuUntil: string | string[] = 'xs';

  @Input()
  public routeMatchOptions?: IsActiveMatchOptions | { exact: boolean };

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
