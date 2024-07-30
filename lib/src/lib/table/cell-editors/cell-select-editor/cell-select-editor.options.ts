import { CellEditorBaseOptions } from '../cell-editor.options';

export interface CellSelectEditorOptions<O = any, T = any> extends CellEditorBaseOptions<T> {
  options: O[] | ((data: T) => O[]);
  compareWithFn?: (o1: O, o2: O) => boolean;
  optionLabelFn?: (o: O) => string;
  multiple?: boolean;
  panelWidth?: string | number | null;
}
