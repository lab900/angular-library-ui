import { ChangeDetectionStrategy, Component, computed, linkedSignal } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Lab900ActionButtonToggleItemComponent } from '../action-button-toggle-item/lab900-action-button-toggle-item.component';
import { AbstractActionComponent } from '../abstract-action-component';
import { computeReactiveBooleanOption } from '../../../utils/utils';

@Component({
  selector: 'lab900-action-button-toggle',
  templateUrl: './lab900-action-button-toggle.component.html',
  imports: [MatButtonToggleGroup, Lab900ActionButtonToggleItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab900ActionButtonToggleComponent<T = any> extends AbstractActionComponent<T> {
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
