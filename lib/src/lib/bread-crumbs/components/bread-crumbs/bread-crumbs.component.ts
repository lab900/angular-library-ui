import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { BreadCrumbItemComponent } from '../bread-crumb-item/bread-crumb-item.component';

/**
 * A breadcrumb trail. The last crumb is the current page. The page header shows one for its `breadCrumbs`.
 */
@Component({
  selector: 'lab900-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
  imports: [BreadCrumbItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadCrumbsComponent {
  public readonly breadCrumbs = input.required<BreadCrumb[]>();
  /** The data that the function options of the crumbs receive */
  public readonly data = input<any>(undefined);
}
