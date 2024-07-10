export interface CellWithAnchorRendererOptions<T = any> {
  url: (data: T) => string;
  target?: string;
}
