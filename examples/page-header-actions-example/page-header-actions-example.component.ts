import { Component, signal } from '@angular/core';
import { ActionButton, Lab900PageHeaderComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-page-header-actions-example',
  imports: [Lab900PageHeaderComponent],
  template: `
    <!-- showActionsFixedOnMobile="false" keeps the actions in the header on small screens, instead of fixed at the bottom -->
    <lab900-page-header pageTitle="Edit customer" [actions]="actions" [showActionsFixedOnMobile]="false" />

    <p>Last action: {{ lastAction() ?? '-' }}</p>
  `,
})
export class PageHeaderActionsExampleComponent {
  protected readonly lastAction = signal<string | undefined>(undefined);

  protected readonly actions: ActionButton[] = [
    // align: 'left' puts an action in a separate group, next to a divider; the others go in the right group
    {
      label: 'Delete',
      type: 'stroked',
      align: 'left',
      action: () => this.lastAction.set('Delete'),
    },
    // for type 'icon', the label is the name of the Material icon
    {
      label: 'history',
      type: 'icon',
      tooltip: { value: 'Show history' },
      action: () => this.lastAction.set('Show history'),
    },
    {
      label: 'Save',
      type: 'flat',
      suffixIcon: 'keyboard_arrow_down',
      subActions: [
        { label: 'Save and close', action: () => this.lastAction.set('Save and close') },
        { label: 'Save as draft', action: () => this.lastAction.set('Save as draft') },
      ],
    },
  ];
}
