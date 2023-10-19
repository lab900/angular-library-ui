export interface CellEditorBaseOptions<T = any> {
  valueChanged: (newValue: any, key: string, original: T) => void;
  disabled?: (data?: T) => boolean;
}
