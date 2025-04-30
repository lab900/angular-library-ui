import { Lab900ButtonType } from './button.model';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { ReactiveBooleanOption, ReactiveOption, ReactiveStringOption } from '../../utils/utils';
import { Lab900ActionDirective } from '../components/lab900-action.directive';

export interface ActionButtonEvent<T = undefined> {
  event: Event;
  data: T;
  actionRef: Lab900ActionDirective<T>;
}

export interface ActionButton<T = undefined> {
  label: ReactiveStringOption<T>;
  action?: (event: ActionButtonEvent<T>) => void;
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
