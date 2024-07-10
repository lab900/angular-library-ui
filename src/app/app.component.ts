import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Lab900NavListComponent, NavItemGroup } from '@lab900/ui';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import packageInfo from '../../package.json';
import {
  MatDrawer,
  MatDrawerMode,
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { SubscriptionBasedDirective } from './modules/shared/directives/subscription-based.directive';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    NgOptimizedImage,
    TranslateModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    AsyncPipe,
    Lab900NavListComponent,
  ],
})
export class AppComponent
  extends SubscriptionBasedDirective
  implements OnInit, OnDestroy
{
  private unsub = new Subject<void>();
  public readonly languages = ['en', 'nl'];
  public readonly gitUrl = packageInfo.repository;
  public readonly navItemsGroups: NavItemGroup[] = showcaseUiNavItems;
  public language = 'en';
  public readonly sideNavMode$: Observable<MatDrawerMode>;

  @ViewChild('drawer')
  private drawer: MatDrawer;

  public constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
    super();

    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/github-logo.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'lab900',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/logo-duo-dark.svg',
      ),
    );

    this.sideNavMode$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(map(({ matches }) => (matches ? 'over' : 'side')));

    this.addSubscription(
      this.router.events.pipe(
        takeUntil(this.unsub),
        withLatestFrom(this.sideNavMode$),
        filter(
          ([e, sideNavMode]) =>
            e instanceof NavigationEnd &&
            sideNavMode === 'over' &&
            this.drawer.opened,
        ),
      ),
      () => {
        this.drawer.close();
      },
    );
  }

  public ngOnInit(): void {
    this.language = this.translateService.currentLang;
  }

  public ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.unsubscribe();
  }
}
