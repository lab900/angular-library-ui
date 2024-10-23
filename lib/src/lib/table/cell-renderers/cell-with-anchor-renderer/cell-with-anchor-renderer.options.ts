export interface CellWithAnchorRendererOptions<T = any> {
  url: (data: T) => string;
  target?: string;
  textBeforeUrl?: (data: T) => string;
}
