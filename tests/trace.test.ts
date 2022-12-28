import { trace, Box } from '../src';
import { data } from './data';

describe('trace', () => {
  test('should log out some results', () => {
    const items = Box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => trace('after dept')(x))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);

    expect(items).toEqual([
      {
        id: 2,
        upc: '2',
        description: 'pepsi',
        price: 2.45,
        dept: 1,
        category: 1,
        vendor: 1,
      },
      {
        id: 3,
        upc: '3',
        description: 'mt dew',
        price: 2.65,
        dept: 1,
        category: 1,
        vendor: 1,
      },
    ]);
  });
});
