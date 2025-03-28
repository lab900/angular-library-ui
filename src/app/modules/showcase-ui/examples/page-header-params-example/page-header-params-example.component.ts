import { Component } from '@angular/core';
import { ActionButton, Lab900PageHeaderComponent, PageHeaderNavItem } from '@lab900/ui';

@Component({
  selector: 'lab900-page-header-params-example',
  template: `<lab900-page-header
    [pageTitle]="pageTitle"
    [navItems]="navItems"
    [actions]="actions"
    [showActionsFixedOnMobile]="false" />`,
  imports: [Lab900PageHeaderComponent],
})
export class PageHeaderParamsExampleComponent {
  public pageTitle = 'Example page header';

  public navItems: PageHeaderNavItem[] = [
    {
      label: 'Tab 1',
      queryParams: {
        page: 'tab1',
      },
    },
    {
      label: 'Tab 2',
      queryParams: {
        page: 'tab2',
      },
    },
  ];

  public actions: ActionButton[] = [
    {
      label: 'close',
      action: () => console.log('cancel'),
      type: 'icon',
    },
    {
      label: 'Left btn',
      action: () => console.log('Left btn'),
      type: 'flat',
      align: 'left',
    },
    {
      label: 'Save',
      action: () => console.log('save'),
      type: 'flat',
      subActions: [
        {
          label: 'Cancel sub',
          action: () => console.log('cancel this'),
        },
      ],
    },
  ];
}
