import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowcaseRouteData } from '../../models/showcase-route.model';
import { Lab900PageHeaderComponent, PageHeaderNavItem } from '@lab900/ui';
import { MatTabsModule } from '@angular/material/tabs';
import MarkdownPageComponent from '../markdown-page/markdown-page.component';
import { ExampleViewerComponent } from '../example-viewer/example-viewer.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'lab900-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTabsModule,
    MarkdownPageComponent,
    ExampleViewerComponent,
    Lab900PageHeaderComponent,
    NgComponentOutlet,
  ],
})
export class ShowcasePageComponent {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  private readonly guideNav: PageHeaderNavItem = {
    label: 'Guide',
    queryParams: { tab: 'guide' },
  };

  private readonly exampleNav: PageHeaderNavItem = {
    label: 'Examples',
    queryParams: { tab: 'examples' },
  };

  public queryParams = toSignal(this.activatedRoute.queryParams);
  public currentTab = computed<'guide' | 'examples'>(
    () => this.queryParams()?.tab ?? 'examples',
  );
  public data = toSignal<ShowcaseRouteData>(this.activatedRoute.data);
  public navItems = computed<PageHeaderNavItem[]>(() => {
    if (this.data()?.docFile) {
      return [this.guideNav, this.exampleNav];
    }
    return [this.exampleNav];
  });

  public constructor() {
    effect(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { tab: this.data()?.docFile ? 'guide' : 'examples' },
      });
    });
  }
}
