import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriptionBasedDirective } from '../../../common/directives/subscription-based.directive';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { NavItemButtonComponent } from '../nav-item-button/nav-item-button.component';

@Component({
  selector: 'lab900-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NavItemButtonComponent, AsyncPipe, NgForOf],
})
export class NavItemComponent
  extends SubscriptionBasedDirective
  implements OnInit
{
  @Input({ required: true })
  public readonly item: NavItem;

  @Input()
  public readonly indentLevels = true;

  @Input()
  public readonly showLevelArrows = false;

  @Input()
  public readonly depth = 0;

  @Input()
  public readonly allowOverlayMenuUntil: string | string[] = Breakpoints.XSmall;

  private readonly _disabled$ = new BehaviorSubject<boolean>(false);
  public readonly disabled$: Observable<boolean> =
    this._disabled$.asObservable();

  @Input()
  public set disabled(disabled: boolean) {
    this._disabled$.next(disabled);
  }

  private readonly _expanded$ = new BehaviorSubject<boolean>(false);
  public readonly expanded$: Observable<boolean> =
    this._expanded$.asObservable();

  @Input()
  public set expanded(expanded: boolean) {
    this._expanded$.next(expanded);
  }

  @Input()
  public navListMatchOptions?: IsActiveMatchOptions;

  public constructor(
    public readonly router: Router,
    public readonly breakpointObserver: BreakpointObserver
  ) {
    super();
  }

  public ngOnInit(): void {
    if (!(this.item.route || this.item.href || this.item.children)) {
      this._disabled$.next(true);
    } else {
      this.addSubscription(
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
        (event: NavigationEnd) => {
          this.item.navigationFinished?.(true);
          const url = event.urlAfterRedirects;
          if (url && this.item?.children?.length) {
            this._expanded$.next(
              this.item.children.some(
                (item: NavItem) => url.indexOf(`/${item.route}`) === 0
              )
            );
          }
        }
      );
    }
  }

  public onClick(event: MouseEvent): void {
    if (this.item?.children?.length) {
      event.preventDefault();
      this._expanded$.next(!this._expanded$.value);
    }
  }
}
