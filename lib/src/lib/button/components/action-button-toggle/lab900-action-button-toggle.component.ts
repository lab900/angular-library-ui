import { ChangeDetectionStrategy, Component, computed, linkedSignal, ViewEncapsulation } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Lab900ActionDirective } from '../lab900-action.directive';
import { computeReactiveBooleanOption } from '../../../utils/utils';
import { MatIcon } from '@angular/material/icon';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lab900-action-button-toggle',
  templateUrl: './lab900-action-button-toggle.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    PreventDoubleClickDirective,
    TranslatePipe,
    Lab900ActionDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab900ActionButtonToggleComponent<T = unknown> extends Lab900ActionDirective<T> {
  protected readonly selected = linkedSignal(() => {
    const subActions = this.action().subActions;
    if (subActions) {
      for (const action of subActions) {
        const selected = computeReactiveBooleanOption<T | undefined>(action.selected, this.data);
        if (selected) {
          return action;
        }
      }
    }
    return null;
  });

  protected readonly hideSingleSelectionIndicator = computed(() => {
    return computeReactiveBooleanOption<T | undefined>(this.action().hideSelectionIndicator, this.data);
  });
}
