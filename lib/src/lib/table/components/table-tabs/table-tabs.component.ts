import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Lab900TableTab } from '../../models/table-tabs.model';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-table-tabs',
  templateUrl: './table-tabs.component.html',
  styleUrls: ['./table-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule],
})
export class Lab900TableTabsComponent<T = string> {
  @Input()
  public tableTabs: Lab900TableTab<T>[];

  @Input()
  public activeTabId: T;

  @Output()
  public activeTabIdChange = new EventEmitter<T>();

  public changeTable(table: Lab900TableTab<T>): void {
    this.activeTabId = table.id;
    this.activeTabIdChange.emit(table.id);
  }
}
