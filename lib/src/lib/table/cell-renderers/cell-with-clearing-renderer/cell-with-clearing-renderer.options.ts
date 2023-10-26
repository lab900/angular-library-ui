export interface CellWithClearingRendererOptions<T = any> {
  icon: (data: T) => string;
  svgIcon?: boolean;
  showClose?: boolean;
}
