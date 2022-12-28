import { curry, sum } from '../src';

describe('curry', () => {
  test('should run a curried function', () => {
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);
  });
  test('should be able to accept arguments seperately', () => {
    const curriedSum = curry(sum);
    const fn1 = curriedSum(4);
    const result = fn1(5);
    expect(result).toEqual(9);
  });
});
