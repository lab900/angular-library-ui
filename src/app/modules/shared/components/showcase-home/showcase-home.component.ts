import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShowcaseConfigModel } from '../../models/showcase-config.model';
import { NavItemGroup } from '@lab900/ui';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'lab900-showcase-home',
  templateUrl: './showcase-home.component.html',
  styleUrls: ['./showcase-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, TranslateModule, RouterLink, MatButtonModule],
})
export default class ShowcaseHomeComponent {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected readonly data = toSignal<{
    config: ShowcaseConfigModel;
    nav: NavItemGroup[];
  }>(
    this.activatedRoute.data as Observable<{
      config: ShowcaseConfigModel;
      nav: NavItemGroup[];
    }>
  );
}
