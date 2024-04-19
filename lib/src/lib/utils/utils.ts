import { coerceArray } from '@angular/cdk/coercion';
import { isObservable, Observable, of } from 'rxjs';

export type propValue<T = any, R = string> = ((data?: T) => R) | R;

export function readPropValue<T, R = string>(
  value: propValue<T, R>,
  data?: T,
): R {
  return typeof value === 'function'
    ? (value as (data?: T) => R)(...coerceArray(data))
    : value;
}

export function coerceObservable<T = any>(
  value: T | Observable<T>,
): Observable<T> {
  return isObservable(value) ? value : of(value);
}
