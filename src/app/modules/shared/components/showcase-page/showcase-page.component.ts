import { ChangeDetectionStrategy, Component, computed, effect, inject, untracked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowcaseRouteData } from '../../models/showcase-route.model';
import { Lab900PageHeaderComponent, PageHeaderNavItem } from '@lab900/ui';
import MarkdownPageComponent from '../markdown-page/markdown-page.component';
import { ExampleViewerComponent } from '../example-viewer/example-viewer.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgComponentOutlet } from '@angular/common';
import { Observable } from 'rxjs';
import { MatTabNavPanel } from '@angular/material/tabs';
import { ApiDocsComponent } from '../api-docs/api-docs.component';

type ShowcaseTab = 'guide' | 'examples' | 'api';

@Component({
  selector: 'lab900-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MarkdownPageComponent,
    ExampleViewerComponent,
    Lab900PageHeaderComponent,
    NgComponentOutlet,
    MatTabNavPanel,
    ApiDocsComponent,
  ],
})
export class ShowcasePageComponent {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  private readonly navByTab: Record<ShowcaseTab, PageHeaderNavItem> = {
    guide: { label: 'Guide', queryParams: { tab: 'guide' } },
    examples: { label: 'Examples', queryParams: { tab: 'examples' } },
    api: { label: 'API', queryParams: { tab: 'api' } },
  };

  public queryParams = toSignal(this.activatedRoute.queryParams);
  public currentTab = computed<ShowcaseTab>(() => this.queryParams()?.tab ?? 'examples');
  public data = toSignal<ShowcaseRouteData>(this.activatedRoute.data as Observable<ShowcaseRouteData>);
  public tabs = computed<ShowcaseTab[]>(() => {
    const data = this.data();
    return [...(data?.docFile ? ['guide' as const] : []), 'examples', ...(data?.api?.length ? ['api' as const] : [])];
  });
  public navItems = computed<PageHeaderNavItem[]>(() => this.tabs().map(tab => this.navByTab[tab]));

  public constructor() {
    effect(() => {
      // keep the tab of the url when the page has it, so a link to ?tab=api opens the API tab
      if (this.tabs().includes(untracked(this.queryParams)?.['tab'])) {
        return;
      }
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { tab: this.data()?.docFile ? 'guide' : 'examples' },
      });
    });
  }
}
