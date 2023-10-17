import { ThemePalette } from '@angular/material/core';

export interface CheckboxCellRendererOptions<T = any> {
  disabled?: boolean;
  indeterminate?: boolean;
  valueChange: (value: boolean, data: T) => void;
  theme?: ThemePalette;
}
