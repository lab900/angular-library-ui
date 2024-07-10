export interface CellWithIconRendererOptions<T = any> {
  icon: (data: T) => string;
  svgIcon?: boolean;
  showCellValue?: boolean;
}
