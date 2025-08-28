import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { NgTemplateOutlet } from '@angular/common';
import { Lab900TableFilterMenuComponent } from '../table-filter-menu/table-filter-menu.component';
import { Lab900ActionButtonComponent } from '../../../button/components/action-button/lab900-action-button.component';

@Component({
  selector: 'lab900-table-header',
  templateUrl: './lab900-table-header.component.html',
  styleUrls: ['./lab900-table-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Lab900TableFilterMenuComponent, NgTemplateOutlet, Lab900ActionButtonComponent],
})
export class Lab900TableHeaderComponent {
  public readonly tableHeaderContent = input<TemplateRef<any> | undefined>(undefined);
  public readonly tableHeaderActions = input<ActionButton[]>([]);
  public readonly filterIcon = input<string>('filter_alt');
  public readonly showFilterHeader = input<boolean>(false);
  public readonly toggleAndMoveColumns = input<boolean>(false);
  public readonly toggleColumns = input<boolean>(true);

  public readonly tableCellsFiltered = output<TableCell[]>();

  public readonly showFilterMenu = computed(() => this.toggleColumns() || this.toggleAndMoveColumns());

  public readonly showHeader = computed(
    () => this.showFilterMenu() || this.tableHeaderActions().length > 0 || !!this.tableHeaderContent()
  );
}
