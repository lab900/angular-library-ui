import { computed, Directive, input } from '@angular/core';
import {
  computeReactiveBooleanOption,
  computeReactiveOption,
  computeReactiveStrictStringOption,
  computeReactiveStringOption,
} from '../../utils/utils';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActionButton } from '../models/action-button.model';

/**
 * Resolves an ActionButton config into signals: label, icons, disabled, hidden and tooltip. The action buttons
 * extend it; use it on your own element to render an action your way.
 */
@Directive({
  selector: '[lab900Action]',
  exportAs: 'lab900Action',
})
export class Lab900ActionDirective<T = undefined> {
  /** The config of the button */
  public readonly action = input.required<ActionButton<T>>();

  // The data is not required, this should be reflected in the generic T type.
  // The `data` computed below works around typescript complaining.
  /** The data that the function options of the config receive */
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

  public readonly ariaLabel = computed(() => {
    return computeReactiveStringOption<T>(this.action().ariaLabel, this.data);
  });

  public readonly suffixIcon = computed(() => {
    return computeReactiveStringOption<T>(this.action().suffixIcon, this.data);
  });

  public readonly prefixIcon = computed(() => {
    return computeReactiveStringOption<T>(this.action().prefixIcon, this.data);
  });

  protected readonly subActions = computed(() => {
    return computeReactiveOption<T, ActionButton<T>[]>(this.action().subActions, this.data);
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
