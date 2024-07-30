import { Component } from '@angular/core';
import { ActionButton, BreadCrumb, Lab900PageHeaderComponent, PageHeaderNavItem } from '@lab900/ui';
import { MatTabsModule } from '@angular/material/tabs';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-page-header-example',
  standalone: true,
  imports: [Lab900PageHeaderComponent, MatTabsModule],
  template: ` <lab900-page-header
      [pageTitle]="pageTitle"
      [navItems]="navItems"
      [actions]="actions"
      [breadCrumbs]="breadCrumbs"
      [data]="{ tab: 'Examples' }"
      [tabPanel]="tabNavPanel" />
    <mat-tab-nav-panel #tabNavPanel />`,
})
export class PageHeaderExampleComponent {
  public pageTitle = 'Example page header';
  public navItems: PageHeaderNavItem[] = [
    {
      label: 'Tab 1',
      route: '#',
      suffixIcon: 'warning',
    },
    {
      label: 'Tab 2',
      route: '#',
      prefixIcon: 'warning',
    },
  ];

  public breadCrumbs: BreadCrumb[] = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'UI Library',
      route: '/ui',
    },
    {
      title: 'Page header',
      route: '/page-header',
    },
    {
      title: (data: { tab: string }) => data.tab,
      route: `/page-header`,
      queryParams: (data: { tab: string }) => ({
        tab: data.tab.toLowerCase(),
      }),
    },
  ];

  public actions: ActionButton[] = [
    {
      type: 'toggle',
      label: '',
      disabled: () => of(true),
      subActions: [
        {
          label: 'Action 1',
          action: () => console.log('action 1'),
        },
        {
          label: 'Action 2',
          action: () => console.log('action 2'),
        },
      ],
    },
    {
      label: 'Cancel',
      prefixIcon: 'edit',
      action: () => console.log('cancel'),
      type: 'stroked',
    },
    {
      label: 'Save',
      suffixIcon: 'keyboard_arrow_down',
      action: () => console.log('save'),
      type: 'flat',
    },
  ];
}
