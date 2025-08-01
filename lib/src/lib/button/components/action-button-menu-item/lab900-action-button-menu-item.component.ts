import { ChangeDetectionStrategy, Component, computed, forwardRef, input, output } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { TranslatePipe } from '@ngx-translate/core';
import { Lab900ActionButtonMenuComponent } from '../action-button-menu/lab900-action-button-menu.component';
import { Lab900ActionDirective } from '../lab900-action.directive';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lab900-action-button-menu-item',
  templateUrl: './lab900-action-button-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatTooltip,
    MatMenuTrigger,
    TranslatePipe,
    MatMenuItem,
    MatIcon,
    PreventDoubleClickDirective,
    forwardRef(() => Lab900ActionButtonMenuComponent),
  ],
})
export class Lab900ActionButtonMenuItemComponent<T = undefined> extends Lab900ActionDirective<T> {
  public readonly menuDisabled = input<boolean>(false);
  protected readonly menuItemDisabled = computed(() => this.menuDisabled() || this.disabled());
  public readonly closeMenu = output<void>();

  public close(): void {
    this.closeMenu.emit();
  }
}
