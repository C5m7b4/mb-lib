import { curry, sum } from '../src';

describe('curry', () => {
  test('should run a curried function', () => {
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);
  });
});
