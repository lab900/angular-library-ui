import { Component, signal, viewChild } from '@angular/core';
import {
  ExpandableRows,
  Lab900TableComponent,
  Lab900TableRowDetailDirective,
  TableCell,
  TableRowAction,
} from '@lab900/ui';

interface OrderLine {
  product: string;
  quantity: number;
}

interface Order {
  id: number;
  customer: string;
  lines: OrderLine[];
}

@Component({
  selector: 'lab900-table-expandable-rows-example',
  imports: [Lab900TableComponent, Lab900TableRowDetailDirective],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="orders"
      [trackByTableFn]="trackByTableFn"
      [tableActionsFront]="tableActionsFront"
      [expandableRows]="expandableRows"
      [(expandedRows)]="expandedRows">
      <ng-template lab900TableRowDetail [lab900TableRowDetailOf]="orders" let-order let-collapse="collapse">
        <ul>
          @for (line of order.lines; track line.product) {
            <li>{{ line.quantity }} x {{ line.product }}</li>
          }
        </ul>
        <button type="button" (click)="collapse()">Close</button>
      </ng-template>
    </lab900-table>
  `,
})
export class TableExpandableRowsExampleComponent {
  private readonly table = viewChild.required(Lab900TableComponent<Order>);

  protected readonly expandedRows = signal<Order[]>([]);

  protected readonly orders: Order[] = [
    {
      id: 1,
      customer: 'John',
      lines: [
        { product: 'Keyboard', quantity: 1 },
        { product: 'Mouse', quantity: 2 },
      ],
    },
    { id: 2, customer: 'Lucie', lines: [{ product: 'Monitor', quantity: 2 }] },
    { id: 3, customer: 'Rob', lines: [] },
  ];

  protected readonly tableCells: TableCell<Order>[] = [
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'customer', label: 'Customer' },
    { key: 'lines', label: 'Lines', cellFormatter: order => String(order.lines.length) },
  ];

  protected readonly expandableRows: ExpandableRows<Order> = {
    multiple: true,
    isExpandable: order => order.lines.length > 0,
  };

  // the row itself toggles on click, this action only shows a chevron for it
  protected readonly tableActionsFront: TableRowAction<Order>[] = [
    {
      type: 'icon',
      label: order => (this.expandedRows().includes(order) ? 'expand_less' : 'expand_more'),
      hide: order => order.lines.length === 0,
      action: ({ data }) => this.table().toggleRowExpansion(data),
    },
  ];

  protected readonly trackByTableFn = (index: number, order: Order): number => order.id;
}
