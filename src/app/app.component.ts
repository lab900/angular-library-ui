import { Component, computed, inject, viewChild } from '@angular/core';
import { NavItemGroup } from '@lab900/ui';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import packageInfo from '../../package.json';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { Lab900NavListComponent } from '../../lib/src/lib/nav-list/components/nav-list/nav-list.component';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterLink,
    NgOptimizedImage,
    TranslatePipe,
    RouterOutlet,
    Lab900NavListComponent,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatIconAnchor,
    MatDrawerContainer,
    MatDrawer,
    Lab900NavListComponent,
    MatDrawerContent,
  ],
})
export class AppComponent {
  private readonly drawer = viewChild(MatDrawer);
  protected readonly gitUrl = packageInfo.repository;
  protected readonly navItemsGroups = computed<NavItemGroup[]>(() => {
    const drawer = this.drawer();
    if (drawer) {
      return showcaseUiNavItems(drawer, this.sideNavMode() === 'over');
    }
    return [];
  });
  protected readonly sideNavMode = toSignal(
    inject(BreakpointObserver)
      .observe('(max-width: 959px)')
      .pipe(map(({ matches }) => (matches ? 'over' : 'side')))
  );
  protected readonly sideNavOpened = computed(() => this.sideNavMode() === 'side');

  public constructor() {
    inject(MatIconRegistry).addSvgIcon(
      'github',
      inject(DomSanitizer).bypassSecurityTrustResourceUrl('assets/images/github-logo.svg')
    );
  }
}
