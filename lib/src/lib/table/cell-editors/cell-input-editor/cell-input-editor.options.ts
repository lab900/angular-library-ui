import { CellEditorBaseOptions } from '../cell-editor.options';

export interface CellInputEditorOptions extends CellEditorBaseOptions {
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';
  maxLength?: number;
  placeholder?: string;
}
