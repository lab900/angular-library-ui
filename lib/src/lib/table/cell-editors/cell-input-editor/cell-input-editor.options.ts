import { CellEditorBaseOptions } from '../cell-editor.options';

type HTMLInputTypeAttribute =
  | 'number'
  | 'search'
  | 'button'
  | 'time'
  | 'image'
  | 'text'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'password'
  | 'radio'
  | 'range';

export interface CellInputEditorOptions extends CellEditorBaseOptions {
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  placeholder?: string;
}
