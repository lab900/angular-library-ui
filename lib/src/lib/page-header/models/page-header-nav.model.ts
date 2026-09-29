type propFunction<T> = (data: T) => string;
type propFunctionBool<T> = (data: T) => boolean;
type paramsFunction<T> = (data: T) => Record<string, any>;

/**
 * A tab of the page header. The tab links to a route and is active while that route is.
 * `T` is the type of the `data` of the page header, which the function options receive.
 */
export interface PageHeaderNavItem<T = any> {
  /** A translation key */
  label: propFunction<T> | string;
  /** The router link of the tab, relative to the current route. Without a route the tab links to the current route. */
  route?: propFunction<T> | string;
  /** The query params of the link */
  queryParams?: paramsFunction<T> | Record<string, any>;
  /** Material icon name after the label */
  suffixIcon?: propFunction<T> | string;
  /** Material icon name before the label */
  prefixIcon?: propFunction<T> | string;
  /** Read the icon names as names of icons registered in the `MatIconRegistry` */
  svgIcon?: propFunctionBool<T> | boolean;
}
