import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { readPropValue } from '../../../utils/utils';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab900-bread-crumb-item',
  templateUrl: './bread-crumb-item.component.html',
  styleUrls: ['./bread-crumb-item.component.scss'],
  imports: [TranslateModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadCrumbItemComponent {
  public readonly item = input.required<BreadCrumb>();
  public readonly data = input<any>(undefined);
  protected readonly title = computed(() => readPropValue(this.item().title, this.data()));
  protected readonly route = computed(() => readPropValue(this.item().route, this.data()));
  protected readonly queryParams = computed(() => readPropValue(this.item().queryParams, this.data()));
}
