import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'lab900-nav-item-button',
  styleUrls: ['./nav-item-button.component.scss'],
  templateUrl: './nav-item-button.component.html',
})
export class NavItemButtonComponent {
  @Input()
  public readonly item: NavItem;

  @Input()
  public readonly expanded: boolean;

  @Input()
  public readonly active: boolean;

  @Input()
  public readonly disabled: boolean;

  @Input()
  public readonly depth: number;

  @Input()
  public readonly showLevelArrow: boolean = false;

  get levelArrow(): string {
    if (this.item?.childrenInOverlay) {
      return 'navigate_next';
    }
    return this.expanded ? 'expand_less' : 'expand_more';
  }
}
