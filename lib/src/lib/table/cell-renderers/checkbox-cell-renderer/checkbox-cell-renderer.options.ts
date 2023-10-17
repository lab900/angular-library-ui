import { ThemePalette } from '@angular/material/core';
import { CellEditorBaseOptions } from '../../cell-editors/cell-editor.options';

export interface CheckboxCellRendererOptions<T = any>
  extends CellEditorBaseOptions<T> {
  disabled?: boolean;
  indeterminate?: boolean;
  theme?: ThemePalette;
}
