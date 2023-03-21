import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { BreadCrumb } from '../../../bread-crumbs/models/bread-crumb.model';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class Lab900PageHeaderComponent implements OnChanges {
  @Input()
  public pageTitle: string;

  @Input()
  public pageTitleArgs: object = {};

  @Input()
  public navItems: PageHeaderNavItem[];

  @Input()
  public actions: ActionButton[];
  public leftActions: ActionButton[];
  public rightActions: ActionButton[];

  @Input()
  public data?: any;

  @Input()
  public breadCrumbs: BreadCrumb[];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.actions) {
      this.leftActions = this.actions?.filter(
        (action) => action.align === 'left'
      );
      this.rightActions = this.actions?.filter(
        (action) => action.align === 'right' || action.align == null
      );
    }
  }

  public getLabel(item: PageHeaderNavItem): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public getRoute(route: ((data: any) => string) | string): string | null {
    return readPropValue(route, this.data);
  }
}
