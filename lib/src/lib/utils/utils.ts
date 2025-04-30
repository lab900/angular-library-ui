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
  value: Signal<any>
): boolean {
  let response = false;
  let optionCopy = option;
  if (!isSignal(optionCopy) && typeof optionCopy === 'function') {
    optionCopy = optionCopy(value());
  }
  if (isSignal(optionCopy)) {
    response = optionCopy();
  } else if (typeof optionCopy === 'boolean') {
    response = optionCopy;
  }
  return response;
}

export function computeReactiveStringOption<PAYLOAD>(
  option: ReactiveStringOption<PAYLOAD> | undefined,
  value: Signal<any>
): string | undefined {
  let response: string | undefined = undefined;
  let optionCopy = option;
  if (!isSignal(optionCopy) && typeof optionCopy === 'function') {
    optionCopy = optionCopy(value());
  }
  if (isSignal(optionCopy)) {
    response = optionCopy();
  } else if (typeof optionCopy === 'string') {
    response = optionCopy;
  }
  return response;
}
export function computeReactiveNumberOption<PAYLOAD>(
  option: ReactiveNumberOption<PAYLOAD> | undefined,
  value: Signal<any>
): number | undefined {
  let response: number | undefined = undefined;
  let optionCopy = option;
  if (!isSignal(optionCopy) && typeof optionCopy === 'function') {
    optionCopy = optionCopy(value());
  }
  if (isSignal(optionCopy)) {
    response = optionCopy();
  } else if (typeof optionCopy === 'number') {
    response = optionCopy;
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
  value: Signal<any>
): T | undefined {
  let response: T | undefined;
  let optionCopy = option;
  if (!isSignal(optionCopy) && typeof optionCopy === 'function') {
    optionCopy = (optionCopy as (data: any) => T)(value());
  }
  if (isSignal(optionCopy)) {
    response = optionCopy();
  } else {
    response = optionCopy as T;
  }
  return response;
}
