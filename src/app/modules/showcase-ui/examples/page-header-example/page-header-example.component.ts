import { Component, signal } from '@angular/core';
import { ActionButton, BreadCrumb, Lab900PageHeaderComponent, PageHeaderNavItem } from '@lab900/ui';
import { MatTabNavPanel } from '@angular/material/tabs';

interface PageData {
  invoiceNumber: string;
}

@Component({
  selector: 'lab900-page-header-example',
  imports: [Lab900PageHeaderComponent, MatTabNavPanel],
  template: `
    <lab900-page-header
      pageTitle="Invoice details"
      [breadCrumbs]="breadCrumbs"
      [data]="pageData"
      [navItems]="navItems"
      [tabPanel]="tabNavPanel"
      [actions]="actions" />
    <!-- the tabs only render with a tab panel; the content of the active tab goes inside it -->
    <mat-tab-nav-panel #tabNavPanel />

    <p>Last action: {{ lastAction() ?? '-' }}</p>
  `,
})
export class PageHeaderExampleComponent {
  protected readonly lastAction = signal<string | undefined>(undefined);

  // `data` is passed to every function in the breadcrumbs, nav items and actions
  protected readonly pageData: PageData = { invoiceNumber: '2026-042' };

  protected readonly breadCrumbs: BreadCrumb[] = [
    { title: 'Home', route: '/' },
    { title: 'Invoices', route: '/page-header' },
    {
      title: (data: PageData) => `Invoice ${data.invoiceNumber}`,
      route: '/page-header',
      queryParams: (data: PageData) => ({ invoice: data.invoiceNumber }),
    },
  ];

  // without a route, a tab links to the current page; the active tab is the one whose query params match the url
  protected readonly navItems: PageHeaderNavItem[] = [
    { label: 'Details', queryParams: { section: 'details' }, prefixIcon: 'description' },
    { label: 'Payments', queryParams: { section: 'payments' }, suffixIcon: 'warning' },
  ];

  protected readonly actions: ActionButton[] = [
    {
      label: 'Cancel',
      type: 'stroked',
      prefixIcon: 'close',
      action: () => this.lastAction.set('Cancel'),
    },
    {
      label: 'Save',
      type: 'flat',
      prefixIcon: 'save',
      action: () => this.lastAction.set('Save'),
    },
  ];
}
