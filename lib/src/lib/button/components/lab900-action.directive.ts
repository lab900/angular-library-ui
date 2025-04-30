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
export class Lab900ActionDirective<T> {
  public readonly action = input.required<ActionButton<T>>();
  public readonly data = input<T | undefined>(undefined);
  protected readonly defaultTooltipPosition: TooltipPosition = 'left';

  public readonly tooltipPosition = computed(() => {
    return this.action().tooltip?.position ?? this.defaultTooltipPosition;
  });

  public readonly hidden = computed(() => {
    return computeReactiveBooleanOption<T | undefined>(this.action().hide, this.data);
  });

  public readonly disabled = computed(() => {
    return computeReactiveBooleanOption<T | undefined>(this.action().disabled, this.data);
  });

  public readonly label = computed(() => {
    return computeReactiveStrictStringOption<T | undefined>(this.action().label, this.data);
  });

  public readonly suffixIcon = computed(() => {
    return computeReactiveStringOption<T | undefined>(this.action().suffixIcon, this.data);
  });

  public readonly prefixIcon = computed(() => {
    return computeReactiveStringOption<T | undefined>(this.action().prefixIcon, this.data);
  });

  public doAction(event: Event): void {
    if (this.action()?.keepMenuOpen) {
      event.stopPropagation();
    }
    this.action()?.action?.({ event, ref: this });
  }

  public close(): void {
    // only for menu
  }
}
