import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { TranslateModule } from '@ngx-translate/core';
import { BreadCrumbItemComponent } from '../bread-crumb-item/bread-crumb-item.component';

@Component({
  selector: 'lab900-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
  imports: [TranslateModule, BreadCrumbItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadCrumbsComponent {
  public readonly breadCrumbs = input.required<BreadCrumb[]>();
  public readonly data = input<any>(undefined);
}
