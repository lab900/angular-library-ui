import { ChangeDetectionStrategy, Component, effect, inject, input, model, ViewEncapsulation } from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';
import { distinctUntilChanged, filter, map, take } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavItemButtonComponent } from '../nav-item-button/nav-item-button.component';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

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

  protected readonly urlAfterEvent = toSignal(
    toObservable(this.item).pipe(
      filter(i => !!i?.children?.length),
      switchMap(() => this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))),
      map(event => event.urlAfterRedirects),
      distinctUntilChanged()
    )
  );

  public constructor() {
    effect(() => {
      const item = this.item();
      if (!(item.route || item.href || item.children)) {
        this.disabled.set(true);
      }
    });

    // This effect is used to determine if the item with children should be expanded or not based on the current url
    effect(
      () => {
        const item = this.item();
        const url = this.urlAfterEvent();
        if (item.children && url) {
          this.expanded.set(item.children?.some((item: NavItem) => url.indexOf(`/${item.route}`) === 0));
        }
      },
      { allowSignalWrites: true }
    );
  }

  public onClick(event: MouseEvent): void {
    const item = this.item();
    if (item?.children?.length) {
      event.preventDefault();
      this.expanded.set(!this.expanded());
    }

    /**
     * If the item has a route and a navigationFinished callback, we wait for the navigation to finish before calling the callback
     */
    if (!this.disabled() && item?.route && item.navigationFinished) {
      this.router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => {
          item.navigationFinished?.(true);
        });
    }
  }
}
