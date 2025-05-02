import { computed, Directive, input } from '@angular/core';
import {
  computeReactiveBooleanOption,
  computeReactiveStrictStringOption,
  computeReactiveStringOption,
} from '../../utils/utils';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActionButton } from '../models/action-button.model';

@Directive({
  selector: '[lab900Action]',
  exportAs: 'lab900Action',
})
export class Lab900ActionDirective<T = undefined> {
  public readonly action = input.required<ActionButton<T>>();

  /**
   * The data is not required, this should be reflected in the generic T type.
   * This computed is to work around typescript complaining
   */
  public readonly _data = input<T | undefined>(undefined, { alias: 'data' });
  public readonly data = computed(() => {
    return this._data() as T;
  });

  protected readonly defaultTooltipPosition: TooltipPosition = 'left';

  public readonly tooltipPosition = computed(() => {
    return this.action().tooltip?.position ?? this.defaultTooltipPosition;
  });

  public readonly hidden = computed(() => {
    return computeReactiveBooleanOption<T>(this.action().hide, this.data);
  });

  public readonly disabled = computed(() => {
    return computeReactiveBooleanOption<T>(this.action().disabled, this.data);
  });

  public readonly label = computed(() => {
    return computeReactiveStrictStringOption<T>(this.action().label, this.data);
  });

  public readonly suffixIcon = computed(() => {
    return computeReactiveStringOption<T>(this.action().suffixIcon, this.data);
  });

  public readonly prefixIcon = computed(() => {
    return computeReactiveStringOption<T>(this.action().prefixIcon, this.data);
  });

  public doAction(event: Event): void {
    if (this.action()?.keepMenuOpen) {
      event.stopPropagation();
    }
    this.action()?.action?.({ event, data: this.data(), actionRef: this });
  }

  public close(): void {
    // only for menu
  }
}
