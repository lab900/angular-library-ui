import { Component, signal } from '@angular/core';
import { Lab900TableComponent, TableCell, TableRowAction } from '@lab900/ui';

interface Invoice {
  id: number;
  customer: string;
  attachments: string[];
  paid: boolean;
}

@Component({
  selector: 'lab900-table-row-actions-example',
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="invoices"
      [trackByTableFn]="trackById"
      [tableActionsFront]="actionsFront"
      [tableActionsBack]="actionsBack" />

    <p>Last action: {{ lastAction() ?? '-' }}</p>
  `,
})
export class TableRowActionsExampleComponent {
  protected readonly lastAction = signal<string | undefined>(undefined);

  protected readonly invoices: Invoice[] = [
    { id: 1, customer: 'John Smith', attachments: ['invoice.pdf'], paid: true },
    { id: 2, customer: 'Lucie Martin', attachments: ['invoice.pdf', 'reminder.pdf'], paid: false },
    { id: 3, customer: 'Rob Peeters', attachments: [], paid: false },
  ];

  protected readonly tableCells: TableCell<Invoice>[] = [
    { key: 'id', label: 'Invoice', width: '80px' },
    { key: 'customer', label: 'Customer' },
    { key: 'paid', label: 'Paid', cellFormatter: invoice => (invoice.paid ? 'Yes' : 'No') },
  ];

  // every field of a row action can be a function of the row
  protected readonly actionsFront: TableRowAction<Invoice>[] = [
    {
      type: 'icon',
      label: 'check_circle',
      tooltip: { value: invoice => (invoice.paid ? 'Already paid' : 'Mark as paid') },
      disabled: invoice => invoice.paid,
      action: ({ data }) => this.lastAction.set(`Invoice ${data.id} marked as paid`),
    },
  ];

  protected readonly actionsBack: TableRowAction<Invoice>[] = [
    {
      type: 'icon',
      label: 'attach_file',
      tooltip: { value: 'Download an attachment' },
      // hidden for rows without attachments
      hide: invoice => invoice.attachments.length === 0,
      // one menu item per attachment of the row
      subActions: invoice =>
        invoice.attachments.map(file => ({
          label: file,
          action: ({ data }) => this.lastAction.set(`Downloaded ${file} of invoice ${data.id}`),
        })),
    },
    {
      type: 'icon',
      label: 'delete',
      tooltip: { value: 'Delete' },
      action: ({ data }) => this.lastAction.set(`Deleted invoice ${data.id}`),
    },
  ];

  protected readonly trackById = (index: number, invoice: Invoice): number => invoice.id;
}
