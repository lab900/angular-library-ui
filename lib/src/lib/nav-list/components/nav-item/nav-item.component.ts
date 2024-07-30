import { ChangeDetectionStrategy, Component, effect, inject, input, model, ViewEncapsulation } from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavItemButtonComponent } from '../nav-item-button/nav-item-button.component';

@Component({
  selector: 'lab900-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavItemButtonComponent],
})
export class NavItemComponent {
  public readonly router = inject(Router);
  public readonly breakpointObserver = inject(BreakpointObserver);

  public readonly item = input.required<NavItem>();
  public readonly indentLevels = input<boolean>(true);
  public readonly showLevelArrows = input<boolean>(false);
  public readonly depth = input<number>(0);
  public readonly allowOverlayMenuUntil = input<string | string[]>(Breakpoints.XSmall);
  public readonly routeMatchOptions = input<IsActiveMatchOptions | { exact: boolean } | undefined>(undefined);

  public readonly disabled = model<boolean>(false);
  public readonly expanded = model<boolean>(false);

  public constructor() {
    effect(() => {
      const item = this.item();
      if (!(item.route || item.href || item.children)) {
        this.disabled.set(true);
      } else {
        this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(event => {
          item.navigationFinished?.(true);
          const url = event.urlAfterRedirects;
          if (url && item?.children?.length) {
            this.expanded.set(item.children.some((item: NavItem) => url.indexOf(`/${item.route}`) === 0));
          }
        });
      }
    });
  }

  public onClick(event: MouseEvent): void {
    if (this.item()?.children?.length) {
      event.preventDefault();
      this.expanded.set(!this.expanded());
    }
  }
}
