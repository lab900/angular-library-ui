import { Component, computed, signal } from '@angular/core';
import { ActionButton, Lab900ActionButtonComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-action-button-example',
  imports: [Lab900ActionButtonComponent],
  styles: ['h4 { margin: 24px 0 8px; } h4:first-child { margin-top: 0; }'],
  template: `
    <h4>Toggle group</h4>
    <lab900-action-button [action]="viewToggle" />

    <h4>Button with a menu</h4>
    <lab900-action-button [action]="exportMenu" />

    <p>Last action: {{ lastAction() ?? '-' }}</p>
  `,
})
export class ActionButtonExampleComponent {
  protected readonly lastAction = signal<string | undefined>(undefined);

  private readonly view = signal<'list' | 'grid'>('list');
  private readonly exporting = signal(false);

  // A toggle shows its sub actions as a button toggle group. `selected` accepts a signal, so the group follows state.
  protected readonly viewToggle: ActionButton = {
    label: 'View',
    type: 'toggle',
    hideSelectionIndicator: true,
    subActions: [
      {
        label: 'List',
        selected: computed(() => this.view() === 'list'),
        action: () => this.selectView('list'),
      },
      {
        label: 'Grid',
        selected: computed(() => this.view() === 'grid'),
        action: () => this.selectView('grid'),
      },
      {
        label: 'Map',
        disabled: true,
      },
    ],
  };

  // Any field can be a signal: the label and the disabled state follow `exporting`.
  protected readonly exportMenu: ActionButton = {
    label: 'Export',
    type: 'flat',
    suffixIcon: 'keyboard_arrow_down',
    disabled: this.exporting,
    subActions: [
      {
        label: computed(() => (this.exporting() ? 'Exporting...' : 'Export as PDF (keeps the menu open)')),
        keepMenuOpen: true,
        action: ({ actionRef }) => {
          this.exporting.set(true);
          // simulates a slow download, then closes the menu from code
          setTimeout(() => {
            this.exporting.set(false);
            this.lastAction.set('Exported as PDF');
            actionRef.close();
          }, 2000);
        },
      },
      {
        label: 'Export as CSV',
        action: () => this.lastAction.set('Exported as CSV'),
      },
    ],
  };

  private selectView(view: 'list' | 'grid'): void {
    this.view.set(view);
    this.lastAction.set(`Switched to ${view} view`);
  }
}
