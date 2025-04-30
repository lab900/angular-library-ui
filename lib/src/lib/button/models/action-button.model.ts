import { Lab900ButtonType } from './button.model';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { ReactiveBooleanOption, ReactiveOption, ReactiveStringOption } from '../../utils/utils';
import { AbstractActionComponent } from '../components/abstract-action-component';

export interface ActionButtonEvent<T = any> {
  event: Event;
  ref: AbstractActionComponent<T>;
}

export interface ActionButton<T = any> {
  label: ReactiveStringOption<T>;
  action?: (event: ActionButtonEvent<T>) => any;
  type?: ReactiveOption<T, 'toggle' | Lab900ButtonType>;
  color?: ReactiveOption<T, ThemePalette>;
  disabled?: ReactiveBooleanOption<T>;
  selected?: ReactiveBooleanOption<T>;
  hide?: ReactiveBooleanOption<T>;
  subActions?: ActionButton<T>[];
  tooltip?: { value: string; position?: TooltipPosition };
  suffixIcon?: ReactiveStringOption<T>;
  prefixIcon?: ReactiveStringOption<T>;
  svgIcon?: boolean;
  containerClass?: ReactiveStringOption<T>;
  buttonId?: ReactiveStringOption<T>;
  align?: 'left' | 'right';
  hideSelectionIndicator?: ReactiveBooleanOption<T>;
  keepMenuOpen?: ReactiveBooleanOption<T>;
}
