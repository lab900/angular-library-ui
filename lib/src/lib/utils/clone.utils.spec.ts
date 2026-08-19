import { deepClone } from './clone.utils';

class Money {
  public constructor(public amount: number) {}

  public add(value: number): Money {
    return new Money(this.amount + value);
  }
}

describe('deepClone', () => {
  it('should return primitives unchanged', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('a')).toBe('a');
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  it('should copy nested objects and arrays', () => {
    const source = { a: 1, b: { c: [1, 2, { d: 3 }] } };
    const copy = deepClone(source);

    expect(copy).toEqual(source);
    expect(copy).not.toBe(source);
    expect(copy.b).not.toBe(source.b);
    expect(copy.b.c[2]).not.toBe(source.b.c[2]);
  });

  it('should copy a Date by value', () => {
    const source = { date: new Date('2026-01-02T03:04:05.000Z') };
    const copy = deepClone(source);

    expect(copy.date).not.toBe(source.date);
    expect(copy.date.getTime()).toBe(source.date.getTime());
  });

  it('should keep the prototype of a class instance, so its methods stay usable', () => {
    const source = { price: new Money(10) };
    const copy = deepClone(source);

    expect(copy.price).not.toBe(source.price);
    expect(copy.price).toBeInstanceOf(Money);
    expect(copy.price.add(5).amount).toBe(15);
  });

  it('should copy a function by reference instead of throwing', () => {
    const format = (value: number): string => `${value}`;
    const copy = deepClone({ format });

    expect(copy.format).toBe(format);
    expect(copy.format(1)).toBe('1');
  });

  it('should copy a function on a nested object', () => {
    const source = { a: { b: { toText: (): string => 'text' } } };
    const copy = deepClone(source);

    expect(copy.a.b.toText).toBe(source.a.b.toText);
    expect(copy.a.b.toText()).toBe('text');
  });

  // This is the case that `cell-editor.abstract.ts` needs. Row data can hold a value such as a
  // Moment date: an object with functions on itself and on its prototype. `structuredClone`
  // throws on such a value, so `deepClone` must keep every function callable.
  it('should clone a value with functions that structuredClone rejects', () => {
    const momentLike = {
      _isUTC: false,
      _d: new Date('2026-01-02T03:04:05.000Z'),
      _locale: { format: (): string => 'DD/MM/YYYY' },
      format(): string {
        return this._d.toISOString();
      },
      clone(): unknown {
        return this;
      },
    };
    const source = { date: momentLike };
    const copy = deepClone(source);

    expect(copy.date).not.toBe(source.date);
    expect(copy.date.format).toBe(source.date.format);
    expect(copy.date.format()).toBe('2026-01-02T03:04:05.000Z');
    expect(copy.date._locale.format()).toBe('DD/MM/YYYY');
    expect(copy.date._d).not.toBe(source.date._d);
    expect(copy.date._d.getTime()).toBe(source.date._d.getTime());
  });

  it('should keep a method that the prototype supplies', () => {
    const copy = deepClone({ price: new Money(10) });

    expect(typeof copy.price.add).toBe('function');
    expect(copy.price.add(5).amount).toBe(15);
  });

  it('should copy a Map and a Set', () => {
    const source = { map: new Map([['a', { b: 1 }]]), set: new Set([{ c: 2 }]) };
    const copy = deepClone(source);

    expect(copy.map).not.toBe(source.map);
    expect(copy.map.get('a')).toEqual({ b: 1 });
    expect(copy.map.get('a')).not.toBe(source.map.get('a'));
    expect(copy.set).not.toBe(source.set);
    expect([...copy.set]).toEqual([{ c: 2 }]);
  });

  it('should copy a RegExp', () => {
    const source = /ab+c/gi;
    const copy = deepClone(source);

    expect(copy).not.toBe(source);
    expect(copy.source).toBe(source.source);
    expect(copy.flags).toBe(source.flags);
  });

  it('should follow a circular reference without endless recursion', () => {
    const source: any = { name: 'root' };
    source.self = source;
    const copy = deepClone(source);

    expect(copy.name).toBe('root');
    expect(copy.self).toBe(copy);
  });

  it('should keep a shared reference shared', () => {
    const shared = { value: 1 };
    const copy = deepClone({ first: shared, second: shared });

    expect(copy.first).toBe(copy.second);
    expect(copy.first).not.toBe(shared);
  });

  it('should keep a shared Date shared', () => {
    const date = new Date('2026-01-02T03:04:05.000Z');
    const copy = deepClone({ from: date, until: date });

    expect(copy.from).toBe(copy.until);
    expect(copy.from).not.toBe(date);
    expect(copy.from.getTime()).toBe(date.getTime());
  });

  it('should not mutate the source when the copy changes', () => {
    const source = { nested: { value: 1 } };
    const copy = deepClone(source);
    copy.nested.value = 2;

    expect(source.nested.value).toBe(1);
  });
});
