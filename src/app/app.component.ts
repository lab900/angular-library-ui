import { Component, computed, inject } from '@angular/core';
import { Lab900NavListComponent, NavItemGroup } from '@lab900/ui';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import packageInfo from '../../package.json';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';

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
    Lab900NavListComponent,
  ],
})
export class AppComponent {
  protected readonly gitUrl = packageInfo.repository;
  protected readonly navItemsGroups: NavItemGroup[] = showcaseUiNavItems;
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
