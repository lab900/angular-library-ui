import { ChangeDetectionStrategy, Component, input, model, ViewEncapsulation } from '@angular/core';
import { Lab900TableTab } from '../../models/table-tabs.model';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lab900-table-tabs',
  templateUrl: './table-tabs.component.html',
  styleUrls: ['./table-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
})
export class Lab900TableTabsComponent<T = string> {
  public readonly tableTabs = input.required<Lab900TableTab<T>[]>();
  public readonly activeTabId = model.required<T>();

  public changeTable(table: Lab900TableTab<T>): void {
    this.activeTabId.set(table.id);
  }
}
