export function isDate(date: unknown): boolean {
  return date instanceof Date;
}

export function equalDates(date1: Date, date2: Date): boolean {
  return date1.getTime() === date2.getTime();
}

export function isObject(object: unknown): boolean {
  return (
    object != null &&
    !Array.isArray(object) &&
    !isDate(object) &&
    typeof object === 'object'
  );
}

export function equalObjects(object1: object, object2: object): boolean {
  const keys1: string[] = Object.keys(object1);
  const keys2: string[] = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (isDifferent(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
}

export function equalArrays(
  array1: Array<unknown>,
  array2: Array<unknown>
): boolean {
  if (array1.length !== array2.length) {
    return false;
  }
  const smallestArrayLen = Math.min(array1.length, array2.length);
  for (let i = 0; i < smallestArrayLen; ++i) {
    if (isDifferent(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
}

export function isDifferent<T = unknown>(newValue: T, oldValue: T): boolean {
  if (Array.isArray(newValue) && Array.isArray(oldValue)) {
    return !equalArrays(newValue ?? [], oldValue ?? []);
  } else if (isDate(newValue) && isDate(oldValue)) {
    return !equalDates(newValue as Date, oldValue as Date);
  } else if (isObject(newValue) && isObject(oldValue)) {
    return !equalObjects(oldValue as object, newValue as object);
  } else if (!isNaN(oldValue as number) && isNaN(newValue as number)) {
    return true;
  }
  return newValue !== oldValue;
}
