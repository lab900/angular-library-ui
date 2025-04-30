import { ChangeDetectionStrategy, Component, forwardRef, input, output, viewChild } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { MatMenu } from '@angular/material/menu';
import { Lab900ActionButtonMenuItemComponent } from '../action-button-menu-item/lab900-action-button-menu-item.component';

@Component({
  selector: 'lab900-action-button-menu',
  imports: [MatMenu, forwardRef(() => Lab900ActionButtonMenuItemComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-menu>
      @for (action of actions(); track action.label) {
        <lab900-action-button-menu-item
          [action]="action"
          [data]="data()"
          [menuDisabled]="disabled()"
          (closeMenu)="closeMenu.emit()" />
      }
    </mat-menu>
  `,
})
export class Lab900ActionButtonMenuComponent<T = any> {
  public readonly actionMenu = viewChild(MatMenu);
  public readonly actions = input.required<ActionButton<T>[]>();
  public readonly data = input<T | undefined>(undefined);
  public readonly disabled = input<boolean>(false);
  protected readonly closeMenu = output<void>();
}
