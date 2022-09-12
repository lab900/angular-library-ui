import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';
import { Subscription } from 'rxjs';
import { SubscriptionBasedDirective } from '../../../common/directives/subscription-based.directive';
import { MediaObserver } from '@angular/flex-layout';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lab900-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent extends SubscriptionBasedDirective implements OnInit, OnDestroy {
  private sub: Subscription;

  @Input()
  public readonly item: NavItem;

  @Input()
  public readonly indentLevels = true;

  @Input()
  public readonly showLevelArrows = false;

  @Input()
  public readonly depth = 0;

  @Input()
  public readonly allowOverlayMenuUntil: string | string[] = 'xs';

  @Input()
  public disabled = false;

  @Input()
  public expanded = false;

  public constructor(public readonly router: Router, public readonly mediaObserver: MediaObserver) {
    super();
  }

  public ngOnInit(): void {
    if (!(this.item.route || this.item.href || this.item.children)) {
      this.disabled = true;
    } else {
      this.addSubscription(this.router.events.pipe(filter((e) => e instanceof NavigationEnd)), (event: NavigationEnd) => {
        this.item.navigationFinished?.(true);
        const url = event.urlAfterRedirects;
        if (url && this.item?.children?.length) {
          this.expanded = this.item.children.some((item: NavItem) => url.indexOf(`/${item.route}`) === 0);
        }
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public onClick(event: MouseEvent): void {
    if (this.item?.children?.length) {
      event.preventDefault();
      this.expanded = !this.expanded;
    }
  }
}
