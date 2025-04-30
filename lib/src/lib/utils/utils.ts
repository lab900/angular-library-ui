import { coerceArray } from '@angular/cdk/coercion';
import { isObservable, Observable, of } from 'rxjs';
import { isSignal, Signal } from '@angular/core';

export type propValue<T = unknown, R = string> = ((data?: T) => R) | R;

export function readPropValue<T, R = string>(value: propValue<T, R>, data?: T): R {
  return typeof value === 'function' ? (value as (data?: T) => R)(...coerceArray(data)) : value;
}

export function coerceObservable<T = unknown>(value: T | Observable<T>): Observable<T> {
  return isObservable(value) ? value : of(value);
}

export type ReactiveOption<PAYLOAD, RETURN_TYPE> =
  | RETURN_TYPE
  | ((data?: PAYLOAD) => RETURN_TYPE | Signal<RETURN_TYPE>)
  | Signal<RETURN_TYPE>;

export type ReactiveBooleanOption<PAYLOAD> = ReactiveOption<PAYLOAD, boolean>;
export type ReactiveStringOption<PAYLOAD> = ReactiveOption<PAYLOAD, string>;
export type ReactiveNumberOption<PAYLOAD> = ReactiveOption<PAYLOAD, number>;

export function computeReactiveBooleanOption<PAYLOAD>(
  option: ReactiveBooleanOption<PAYLOAD> | undefined,
  value: Signal<PAYLOAD>
): boolean {
  let response = false;
  if (!isSignal(option) && typeof option === 'function') {
    option = option(value());
  }
  if (isSignal(option)) {
    response = option();
  } else if (typeof option === 'boolean') {
    response = option;
  }
  return response;
}

export function computeReactiveStringOption<PAYLOAD>(
  option: ReactiveStringOption<PAYLOAD> | undefined,
  value: Signal<PAYLOAD>
): string | undefined {
  let response: string | undefined = undefined;
  if (!isSignal(option) && typeof option === 'function') {
    option = option(value());
  }
  if (isSignal(option)) {
    response = option();
  } else if (typeof option === 'string') {
    response = option;
  }
  return response;
}
export function computeReactiveNumberOption<PAYLOAD>(
  option: ReactiveNumberOption<PAYLOAD> | undefined,
  value: Signal<PAYLOAD>
): number | undefined {
  let response: number | undefined = undefined;
  if (!isSignal(option) && typeof option === 'function') {
    option = option(value());
  }
  if (isSignal(option)) {
    response = option();
  } else if (typeof option === 'number') {
    response = option;
  }
  return response;
}

export function computeReactiveStrictStringOption<PAYLOAD>(
  option: ReactiveStringOption<PAYLOAD> | undefined,
  value: Signal<any>
): string {
  return computeReactiveStringOption(option, value) ?? '';
}

export function computeReactiveOption<PAYLOAD, T>(
  option: ReactiveOption<PAYLOAD, T> | undefined,
  value: Signal<PAYLOAD>
): T | undefined {
  let response: T | undefined;
  if (!isSignal(option) && typeof option === 'function') {
    option = (option as (data: any) => T)(value());
  }
  if (isSignal(option)) {
    response = option();
  } else {
    response = option as T;
  }
  return response;
}
