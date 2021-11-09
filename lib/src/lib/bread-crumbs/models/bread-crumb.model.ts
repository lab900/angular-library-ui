export interface BreadCrumb {
  title: ((data: any) => string) | string;
  route: ((data: any) => string) | string;
  queryParams?: ((data: any) => object) | object;
  divider?: string;
}
