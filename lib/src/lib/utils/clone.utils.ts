/**
 * Deep clone a value without a third-party dependency.
 *
 * `structuredClone` cannot do this job. It throws on functions and it drops the prototype,
 * so class instances such as a Moment date break. This clone keeps the prototype, copies
 * functions by reference, follows circular references, and keeps a shared reference shared.
 */
export function deepClone<T>(value: T, seen = new WeakMap<object, unknown>()): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  const source = value as object;
  if (seen.has(source)) {
    return seen.get(source) as T;
  }

  if (value instanceof Date) {
    const copy = new Date(value.getTime());
    seen.set(source, copy);
    return copy as T;
  }

  if (value instanceof RegExp) {
    const copy = new RegExp(value.source, value.flags);
    seen.set(source, copy);
    return copy as T;
  }

  if (Array.isArray(value)) {
    const copy: unknown[] = [];
    seen.set(source, copy);
    value.forEach((item, index) => (copy[index] = deepClone(item, seen)));
    return copy as T;
  }

  if (value instanceof Map) {
    const copy = new Map<unknown, unknown>();
    seen.set(source, copy);
    value.forEach((item, key) => copy.set(deepClone(key, seen), deepClone(item, seen)));
    return copy as T;
  }

  if (value instanceof Set) {
    const copy = new Set<unknown>();
    seen.set(source, copy);
    value.forEach(item => copy.add(deepClone(item, seen)));
    return copy as T;
  }

  if (value instanceof ArrayBuffer) {
    const copy = value.slice(0);
    seen.set(source, copy);
    return copy as T;
  }

  if (value instanceof DataView) {
    const copy = new DataView(value.buffer.slice(0), value.byteOffset, value.byteLength);
    seen.set(source, copy);
    return copy as T;
  }

  if (ArrayBuffer.isView(value)) {
    const view = value as unknown as { constructor: any; buffer: ArrayBuffer; byteOffset: number; length: number };
    const copy = new view.constructor(view.buffer.slice(0), view.byteOffset, view.length);
    seen.set(source, copy);
    return copy as T;
  }

  const copy = Object.create(Object.getPrototypeOf(source)) as object;
  seen.set(source, copy);
  Reflect.ownKeys(source).forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (!descriptor) {
      return;
    }
    if ('value' in descriptor) {
      descriptor.value = deepClone(descriptor.value, seen);
    }
    Object.defineProperty(copy, key, descriptor);
  });
  return copy as T;
}
