type propFunction<T> = (data: T) => string;
type propFunctionBool<T> = (data: T) => boolean;
type paramsFunction<T> = (data: T) => { [key: string]: any };

export interface PageHeaderNavItem<T = any> {
  label: propFunction<T> | string;
  route?: propFunction<T> | string;
  queryParams?: paramsFunction<T> | { [key: string]: any };
  suffixIcon?: propFunction<T> | string;
  prefixIcon?: propFunction<T> | string;
  svgIcon?: propFunctionBool<T> | boolean;
}
