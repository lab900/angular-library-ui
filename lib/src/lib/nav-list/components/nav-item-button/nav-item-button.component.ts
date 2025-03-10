import { ChangeDetectionStrategy, Component, computed, input, model, ViewEncapsulation } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';
import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lab900-nav-item-button',
  styleUrls: ['./nav-item-button.component.scss'],
  templateUrl: './nav-item-button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, TranslateModule, MatListModule, NgTemplateOutlet, RouterLink, RouterLinkActive],
})
export class NavItemButtonComponent {
  public readonly item = input.required<NavItem>();
  public readonly routeMatchOptions = input<IsActiveMatchOptions | { exact: boolean } | undefined>(undefined);
  public readonly disabled = model<boolean>(false);
  public readonly expanded = model<boolean>(false);
  public readonly showLevelArrow = input<boolean>(false);
  public readonly depth = input<number>(0);

  public readonly icon = computed(() => {
    if (this.item()?.childrenInOverlay) {
      return 'navigate_next';
    }
    return this.expanded() ? 'expand_less' : 'expand_more';
  });
}
