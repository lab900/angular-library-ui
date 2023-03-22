import { coerceArray } from '@angular/cdk/coercion';

export type propValue<T = any, R = string> = ((data?: T) => R) | R;

export function readPropValue<T extends any, R = string>(
  value: propValue<T, R>,
  data?: T
): R {
  return typeof value === 'function'
    ? (value as (data?: T) => R)(...coerceArray(data))
    : value;
}
