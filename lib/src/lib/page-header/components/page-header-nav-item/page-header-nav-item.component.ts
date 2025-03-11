import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { readPropValue } from '../../../utils/utils';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { MatTabLink } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lab900-page-header-nav-item',
  templateUrl: './page-header-nav-item.component.html',
  styleUrls: ['./page-header-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLinkActive, TranslatePipe, RouterLink, MatTabLink, MatIcon],
})
export class PageHeaderNavItemComponent {
  public readonly item = input.required<PageHeaderNavItem>();
  public readonly data = input<any>(undefined);

  protected readonly label = computed(() => readPropValue(this.item().label, this.data()));
  protected readonly route = computed(() => readPropValue(this.item().route, this.data()) ?? []);
  protected readonly suffixIcon = computed(() => readPropValue(this.item().suffixIcon, this.data()));
  protected readonly prefixIcon = computed(() => readPropValue(this.item().prefixIcon, this.data()));
}
