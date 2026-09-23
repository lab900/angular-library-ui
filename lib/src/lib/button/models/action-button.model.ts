import { Lab900ButtonType } from './button.model';
import { ThemePalette } from '@angular/material/core';
import { ReactiveBooleanOption, ReactiveOption, ReactiveStringOption } from '../../utils/utils';
import { Lab900ActionDirective } from '../components/lab900-action.directive';

/**
 * What the `action` function of an ActionButton receives
 */
export interface ActionButtonEvent<T = undefined> {
  /** The click event */
  event: Event;
  /** The data of the button, for example the row of a table */
  data: T;
  /** The directive that resolved the button */
  actionRef: Lab900ActionDirective<T>;
}

/**
 * The config of a `lab900-action-button`. The page header and the table take lists of them.
 * `T` is the type of the data that the function options receive.
 */
export interface ActionButton<T = undefined> {
  /** A translation key. For the icon and fab types it is the icon name instead. */
  label: ReactiveStringOption<T>;
  /** Runs on a click. Not called when the button has sub actions: the button then opens them. */
  action?: (event: ActionButtonEvent<T>) => void;
  /** The Material button variant, or `toggle` for a button toggle group of the sub actions. Without a type it is a text button. */
  type?: ReactiveOption<T, 'toggle' | Lab900ButtonType>;
  color?: ReactiveOption<T, ThemePalette>;
  disabled?: ReactiveBooleanOption<T>;
  /** On a sub action of a toggle: the option that is selected */
  selected?: ReactiveBooleanOption<T>;
  hide?: ReactiveBooleanOption<T>;
  /** Actions in a menu that the button opens. With the `toggle` type they are the options of the toggle group. */
  subActions?: ReactiveOption<T, ActionButton<T>[]>;
  /** A tooltip with a translation key. The position is `above` by default. */
  tooltip?: {
    value: ReactiveStringOption<T>;
    position?: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
  };
  /** Material icon name after the label */
  suffixIcon?: ReactiveStringOption<T>;
  /** Material icon name before the label */
  prefixIcon?: ReactiveStringOption<T>;
  /** Read the icon names as names of icons registered in the `MatIconRegistry` */
  svgIcon?: boolean;
  /** CSS classes on the `<button>` element */
  containerClass?: ReactiveStringOption<T>;
  /** The `id` of the `<button>` element */
  buttonId?: ReactiveStringOption<T>;
  /** In the page header: the side of the header that the button is on */
  align?: 'left' | 'right';
  /** On a toggle: hide the check mark of the selected option */
  hideSelectionIndicator?: ReactiveBooleanOption<T>;
  /** On a sub action in a menu: keep the menu open after a click */
  keepMenuOpen?: ReactiveBooleanOption<T>;
}
