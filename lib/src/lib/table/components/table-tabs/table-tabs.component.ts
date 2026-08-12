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
export class Lab900TableTabsComponent<TabId = string, T extends object = object> {
  public readonly tableTabs = input.required<Lab900TableTab<TabId, T>[]>();
  public readonly activeTabId = model.required<TabId>();

  public changeTable(table: Lab900TableTab<TabId, T>): void {
    this.activeTabId.set(table.id);
  }
}
