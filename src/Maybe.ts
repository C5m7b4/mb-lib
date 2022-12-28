const isNullOrUndef = <T>(x: T) => x === null || typeof x === 'undefined';

const maybe = <T>(x: T) => ({
  isNothing: () => isNullOrUndef(x),
  extract: () => x,
  map: (f: Function): T | null | any => {
    console.log('x', x);
    return !isNullOrUndef(x) ? Maybe.just(f(x)) : Maybe.nothing();
  },
});

export const Maybe = {
  just: maybe,
  nothing: () => maybe(null),
  chain:
    (...fns: Function[]) =>
    (x: any) =>
      fns.reduce((y, f) => y.map(f), x),
};
