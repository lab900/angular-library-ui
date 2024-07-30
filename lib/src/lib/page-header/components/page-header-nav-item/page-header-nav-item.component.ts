import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { readPropValue } from '../../../utils/utils';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';

@Component({
  selector: 'lab900-page-header-nav-item',
  templateUrl: './page-header-nav-item.component.html',
  styleUrls: ['./page-header-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule, MatTabsModule, RouterLinkActive, TranslateModule, RouterLink],
})
export class PageHeaderNavItemComponent {
  public readonly item = input.required<PageHeaderNavItem>();
  public readonly data = input<any>(undefined);

  protected readonly label = computed(() => readPropValue(this.item().label, this.data()));
  protected readonly route = computed(() => readPropValue(this.item().route, this.data()) ?? []);
  protected readonly suffixIcon = computed(() => readPropValue(this.item().suffixIcon, this.data()));
  protected readonly prefixIcon = computed(() => readPropValue(this.item().prefixIcon, this.data()));
}
