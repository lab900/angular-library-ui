export interface CellEditorBaseOptions<T = any> {
  disabled?: boolean;
  valueChanged: (newValue: any, original: T) => void;
}
