import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { Lab900TableService } from '../../services/table.service';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-column-header-sorting',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` @if (svgIcon().length) {
    <span class="material-icons lab900-sort-arrow">
      {{ svgIcon() }}
    </span>
  }`,
  styles: [
    `
      .lab900-sort-arrow {
        font-size: 12px;
        display: block;
        margin-left: 4px;
      }
    `,
  ],
})
export class ColumnHeaderSortingComponent {
  private readonly tableService = inject(Lab900TableService);
  public readonly columnConfig = input.required<TableCell>();
  public readonly sortDirection = computed(() => {
    const sort = this.tableService.sort();
    return (
      sort?.find(
        (s) =>
          s.id === (this.columnConfig().sortKey ?? this.columnConfig().key),
      )?.direction ?? ''
    );
  });
  public readonly svgIcon = computed(() => {
    const dir = this.sortDirection();
    if (dir === 'asc') {
      return 'north';
    } else if (dir === 'desc') {
      return 'south';
    }
    return '';
  });
}
