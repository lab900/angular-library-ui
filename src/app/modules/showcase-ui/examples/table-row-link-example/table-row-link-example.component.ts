import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs';
import {
  CellInputEditorComponent,
  CellInputEditorOptions,
  CellValueChangeEvent,
  Lab900TableComponent,
  TableCell,
  TableRowAction,
} from '@lab900/ui';

interface Order {
  id: number;
  customer: string;
  status: 'draft' | 'sent';
  note: string;
  reference: string;
}

@Component({
  selector: 'lab900-table-row-link-example',
  imports: [Lab900TableComponent],
  template: `
    <p>
      Sent orders are links: hover one to see its url, and middle click, ctrl/cmd click or right click it to open it in
      a new tab. A plain click runs onRowClick, for every order. Drafts are not links. The reference cell is editable,
      so it is not a part of the link.
    </p>
    <lab900-table
      [tableCells]="tableCells"
      [data]="orders()"
      [trackByTableFn]="trackById"
      [tableActionsBack]="actionsBack"
      [rowLink]="orderLink"
      [rowLinkLabel]="orderLinkLabel"
      [onRowClick]="openOrder"
      (cellValueChanged)="updateOrder($event)" />

    <p>Order in the url: {{ selectedOrder() ?? '-' }}</p>
    <p>Last action: {{ lastAction() ?? '-' }}</p>
  `,
})
export class TableRowLinkExampleComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly selectedOrder = toSignal(this.route.queryParamMap.pipe(map(params => params.get('order'))));
  protected readonly lastAction = signal<string | undefined>(undefined);

  protected readonly orders = signal<Order[]>([
    { id: 1, customer: 'John Smith', status: 'sent', note: 'Deliver at the back door', reference: 'PO-1001' },
    { id: 2, customer: 'Lucie Martin', status: 'draft', note: 'Waiting for the final quantities', reference: '' },
    {
      id: 3,
      customer: 'Rob Peeters',
      status: 'sent',
      note: 'Split the delivery over two days, the warehouse is closed on Friday afternoon',
      reference: 'PO-1003',
    },
  ]);

  // the 4th type parameter is the editor options type, see the inline editing example
  protected readonly tableCells: TableCell<Order, any, any, any>[] = [
    { key: 'id', label: 'Order', width: '80px' },
    { key: 'customer', label: 'Customer' },
    {
      key: 'status',
      label: 'Status',
      cellTooltip: { text: order => (order?.status === 'sent' ? 'Sent to the customer' : 'Not sent yet') },
    },
    // a long note is cut off and shows the full text in a tooltip
    { key: 'note', label: 'Note', cellMaxWidth: '200px' },
    {
      key: 'reference',
      label: 'Reference',
      cellEditor: CellInputEditorComponent,
      cellEditorOptions: { placeholder: 'Add a reference' } satisfies CellInputEditorOptions,
    },
  ];

  protected readonly actionsBack: TableRowAction<Order>[] = [
    {
      type: 'icon',
      label: 'delete',
      ariaLabel: 'Delete order',
      action: ({ data }) => this.lastAction.set(`Order ${data.id} deleted`),
    },
  ];

  // null for a row that is not a link
  protected readonly orderLink = (order: Order): UrlTree | null =>
    order.status === 'sent' ? this.orderUrl(order) : null;

  // the name of the link for screen readers and getByRole('link', { name }), a translation key
  protected readonly orderLinkLabel = (order: Order): string => `Open order ${order.id}`;

  // a plain click still lands here, also on a link row: navigate, and run side effects like saving the filters
  protected readonly openOrder = (order: Order): void => {
    void this.router.navigateByUrl(this.orderUrl(order));
    this.lastAction.set(`Order ${order.id} opened by onRowClick`);
  };

  protected readonly trackById = (index: number, order: Order): number => order.id;

  protected updateOrder({ row, cell, value }: CellValueChangeEvent<Order>): void {
    const key = cell.key as keyof Order;
    this.orders.update(orders => orders.map(order => (order.id === row.id ? { ...order, [key]: value } : order)));
  }

  // build the UrlTree yourself, so relative commands resolve from your route
  private orderUrl(order: Order): UrlTree {
    return this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: { order: order.id },
      queryParamsHandling: 'merge',
    });
  }
}
