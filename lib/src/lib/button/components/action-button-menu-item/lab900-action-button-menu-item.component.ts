import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatePipe } from '@ngx-translate/core';
import { Lab900ActionDirective } from '../lab900-action.directive';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';
import { MatIcon } from '@angular/material/icon';
import { computeReactiveStrictStringOption } from '../../../utils/utils';

@Component({
  selector: 'lab900-action-button-menu-item',
  templateUrl: './lab900-action-button-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTooltip, MatMenuModule, TranslatePipe, MatIcon, PreventDoubleClickDirective],
})
export class Lab900ActionButtonMenuItemComponent<T = undefined> extends Lab900ActionDirective<T> {
  public readonly menuDisabled = input<boolean>(false);
  protected readonly menuItemDisabled = computed(() => this.menuDisabled() || this.disabled());

  protected readonly tooltipValue = computed(() => {
    return computeReactiveStrictStringOption<T>(this.action().tooltip?.value, this.data);
  });
}
