import { CellEditorBaseOptions } from '../cell-editor.options';

export interface CellSelectEditorOptions<O = any>
  extends CellEditorBaseOptions {
  options: O[];
  compareWithFn?: (o1: O, o2: O) => boolean;
  optionLabelFn?: (o: O) => string;
  placeholder?: string;
}
