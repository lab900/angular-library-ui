import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BreadCrumb } from '../../models/bread-crumb.model';

import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadCrumbItemComponent } from '../bread-crumb-item/bread-crumb-item.component';

@Component({
  selector: 'lab900-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
  standalone: true,
  imports: [RouterLink, TranslateModule, BreadCrumbItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadCrumbsComponent {
  @Input({ required: true })
  public breadCrumbs: BreadCrumb[];

  @Input()
  public data?: any;
}
