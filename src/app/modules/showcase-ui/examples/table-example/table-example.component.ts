import { AfterViewInit, ChangeDetectionStrategy, Component, signal, TrackByFunction } from '@angular/core';
import {
  Lab900Sort,
  Lab900TableComponent,
  Lab900TableEmptyDirective,
  Lab900TableHeaderContentDirective,
  Lab900TableTopContentDirective,
  TableCell,
} from '@lab900/ui';
import { productTableConfig } from './product-cells';
import { products } from './product-mock';

@Component({
  selector: 'lab900-table-example',
  standalone: true,
  imports: [
    Lab900TableComponent,
    Lab900TableTopContentDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableEmptyDirective,
  ],
  template: ` <lab900-table
    [tableCells]="tableCells()"
    [sort]="sort"
    [data]="mockData()"
    [loading]="loading()"
    [toggleAndMoveColumns]="false"
    filterIcon="settings"
    [multiSort]="true"
    [rowClass]="getRowClass"
    (tableCellsFiltered)="filtered($event)"
    [maxColumnWidth]="'200px'"
    [preFooterTitle]="'Quantity Total'"
    [trackByTableFn]="trackByTableFn"
    [onRowClick]="onRowClick">
    <div *lab900TableTopContent>Custom top content</div>
    <div *lab900TableHeaderContent>Custom header</div>

    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
  styleUrls: ['table-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleComponent implements AfterViewInit {
  public sort: Lab900Sort[] = [{ id: 'uuid', direction: 'asc' }];
  public loading = signal(true);

  public mockData = signal<any[]>([]);

  public tableCells = signal<TableCell[]>(productTableConfig());
  public trackByTableFn: TrackByFunction<any> = (index, item) => item.uuid;

  public filtered(tableCells: TableCell[]): void {
    console.log({ tableCells });
  }

  public getRowClass(row: any): string {
    return row.active ? 'bg-green' : '';
  }

  public onRowClick(row: any): void {
    console.log('Row clicked', row);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.mockData.set(products);
      this.loading.set(false);
      console.log('Data loaded');
    }, 3000);
  }
}
