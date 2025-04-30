import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ActionButton, Lab900ActionButtonComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-action-button-example',
  styles: ['p {margin: 10px 0}'],
  imports: [Lab900ActionButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>Toggle action button</p>
    <lab900-action-button [action]="toggleActionButton" />

    <p>Action button with submenu</p>
    <lab900-action-button [action]="actionWithSubActions" />
  `,
})
export class ActionButtonExampleComponent {
  private readonly downloading = signal(false);
  private readonly downloadLabel = computed(() => (this.downloading() ? 'Downloading...' : 'Download'));

  protected readonly toggleActionButton: ActionButton<void> = {
    label: 'EntityDetailSectionToggleToggleButton',
    type: 'toggle',
    hideSelectionIndicator: true,
    subActions: [
      {
        label: 'Button 1',
        selected: true,
        action: () => {
          console.log('Button 1 is selected');
        },
        buttonId: 'btn-1',
      },
      {
        label: 'Button 2',
        selected: false,
        action: () => {
          console.log('Button 2 is selected');
        },
        buttonId: 'btn-2',
      },
      {
        label: 'Button 3',
        action: () => {
          console.log('Button 2 is selected');
        },
        disabled: true,
        buttonId: 'btn-3',
      },
    ],
  };

  protected readonly actionWithSubActions: ActionButton<void> = {
    label: 'Action with sub menu',
    type: 'flat',
    disabled: this.downloading,
    subActions: [
      {
        label: this.downloadLabel,
        keepMenuOpen: true,
        action: ({ ref }) => {
          this.downloading.set(true);
          setTimeout(() => {
            ref.close();
            console.log('Mock downloaded ended', ref);
            this.downloading.set(false);
          }, 5000);
        },
      },
      {
        label: 'Click and close',
        action: ({ ref }) => {
          console.log('Click and close', ref.data());
        },
      },
    ],
  };
}
