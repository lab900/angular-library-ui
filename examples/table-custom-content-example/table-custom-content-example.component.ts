import { Component, signal } from '@angular/core';
import {
  ActionButton,
  Lab900TableComponent,
  Lab900TableEmptyDirective,
  Lab900TableHeaderContentDirective,
  Lab900TableTopContentDirective,
  TableCell,
} from '@lab900/ui';

interface Order {
  id: number;
  customer: string;
  status: 'open' | 'paid' | 'overdue';
  amount: number;
}

const orders: Order[] = [
  { id: 1001, customer: 'John Smith', status: 'paid', amount: 120 },
  { id: 1002, customer: 'Lucie Martin', status: 'open', amount: 75.5 },
  { id: 1003, customer: 'Rob Peeters', status: 'overdue', amount: 310 },
  { id: 1004, customer: 'Sarah Jansen, a customer name that is too long for the column', status: 'paid', amount: 42 },
];

@Component({
  selector: 'lab900-table-custom-content-example',
  imports: [
    Lab900TableComponent,
    Lab900TableTopContentDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableEmptyDirective,
  ],
  // the table renders the rows, so reach its classes with ::ng-deep
  styles: `
    :host ::ng-deep .order-row--overdue {
      background-color: rgba(255, 0, 0, 0.08);
    }
    :host ::ng-deep .status-cell--paid {
      color: green;
    }
  `,
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="orders()"
      [trackByTableFn]="trackById"
      [tableHeaderActions]="headerActions"
      [toggleAndMoveColumns]="true"
      [rowClass]="rowClass"
      [maxColumnWidth]="'200px'"
      [onRowClick]="onRowClick">
      <!-- left of the header actions -->
      <h4 *lab900TableHeaderContent style="margin: 0;">Orders</h4>
      <!-- between the header and the table -->
      <p *lab900TableTopContent>Overdue orders have a red background. Click a row to see the row click event.</p>
      <!-- instead of the default text when there are no rows -->
      <div *lab900TableEmpty>
        <p>No orders yet.</p>
      </div>
    </lab900-table>

    <p>Last event: {{ lastEvent() ?? '-' }}</p>
  `,
})
export class TableCustomContentExampleComponent {
  protected readonly lastEvent = signal<string | undefined>(undefined);
  protected readonly orders = signal<Order[]>(orders);

  // shown above the table; the settings icon next to them hides and reorders columns (toggleAndMoveColumns)
  protected readonly headerActions: ActionButton[] = [
    {
      label: 'Clear rows',
      type: 'stroked',
      action: () => this.orders.set([]),
    },
    {
      label: 'Restore rows',
      type: 'flat',
      action: () => this.orders.set(orders),
    },
  ];

  protected readonly tableCells: TableCell<Order>[] = [
    { key: 'id', label: 'Order', width: '80px', footer: 'Total' },
    // longer than maxColumnWidth: the text is cut off and shown in a tooltip
    { key: 'customer', label: 'Customer' },
    { key: 'status', label: 'Status', cellClass: order => `status-cell--${order.status}` },
    {
      key: 'amount',
      label: 'Amount',
      cellFormatter: order => `€ ${order.amount.toFixed(2)}`,
      // the footer gets all the rows
      footer: rows => `€ ${rows.reduce((sum, order) => sum + order.amount, 0).toFixed(2)}`,
    },
  ];

  protected readonly rowClass = (order: Order): string => `order-row--${order.status}`;

  protected readonly onRowClick = (order: Order): void => this.lastEvent.set(`Clicked order ${order.id}`);

  protected readonly trackById = (index: number, order: Order): number => order.id;
}
