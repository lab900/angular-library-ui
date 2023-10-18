import { Component } from '@angular/core';
import { ActionButton, BreadCrumb, PageHeaderNavItem } from '@lab900/ui';

@Component({
  selector: 'lab900-page-header-example',
  template: ` <lab900-page-header
      [pageTitle]="pageTitle"
      [navItems]="navItems"
      [actions]="actions"
      [breadCrumbs]="breadCrumbs"
      [data]="{ tab: 'Examples' }"
      [tabPanel]="tabNavPanel"
    ></lab900-page-header>
    <mat-tab-nav-panel #tabNavPanel></mat-tab-nav-panel>`,
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
