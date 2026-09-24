/**
 * One crumb of a breadcrumb trail. The function options receive the `data` of the trail.
 */
export interface BreadCrumb {
  /** A translation key */
  title: ((data: any) => string) | string;
  /** The router link of the crumb. A crumb without a route is plain text. */
  route: ((data: any) => string) | string;
  /** The query params of the link */
  queryParams?: ((data: any) => object) | object;
  /** The text between this crumb and the next one */
  divider?: string;
}
