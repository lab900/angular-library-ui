import { ChangeDetectionStrategy, Component, computed, inject, input, output, ViewEncapsulation } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Lab900TableService } from '../../services/table.service';
import { readPropValue } from '../../../utils/utils';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lab900-table-filter-menu',
  templateUrl: './table-filter-menu.component.html',
  styleUrls: ['./table-filter-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatMenuModule,
    MatCheckboxModule,
    TranslateModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDragHandle,
    MatButtonModule,
  ],
})
export class Lab900TableFilterMenuComponent {
  private readonly tableService = inject(Lab900TableService);
  /**
   * Filterable table cells. If the cell is always visible, it will not be shown in the filter menu.
   */
  protected readonly filterableTableCells = computed(() =>
    this.tableService.columns().filter((cell: TableCell) => !cell.alwaysVisible)
  );
  protected readonly visibleCells = computed(() => this.filterableTableCells().filter((cell: TableCell) => !cell.hide));
  protected readonly hiddenCells = computed(() => this.filterableTableCells().filter((cell: TableCell) => !!cell.hide));

  public filterIcon = input<string>('filter_alt');
  public toggleAndMoveColumns = input<boolean>(false);

  protected readonly filterChanged = output<TableCell[]>();

  public getCellLabel(cell: TableCell): string {
    return readPropValue(cell.label, cell);
  }

  public handleCheckboxClick(event: MouseEvent, cell: TableCell): void {
    event.stopPropagation();
    event.preventDefault();
    const tableCells = this.filterableTableCells();
    const index = tableCells.findIndex(c => c.key === cell.key);
    tableCells[index].hide = !tableCells[index].hide;
    this.filterChanged.emit(tableCells);
  }

  public drop($event: CdkDragDrop<TableCell[]>): void {
    const tableCells = this.filterableTableCells();
    const visibleColumns = this.visibleCells();
    moveItemInArray(visibleColumns, $event.previousIndex, $event.currentIndex);
    visibleColumns.forEach((cell, newColumnOrder) => {
      const index = tableCells.findIndex(c => c.key === cell.key);
      tableCells[index].columnOrder = newColumnOrder;
    });
    this.filterChanged.emit(tableCells);
  }
}
