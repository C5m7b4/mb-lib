import { prop } from '../src';

describe('prop', () => {
  const obj = {
    id: 1,
    name: 'mike',
  };

  test('should get a property from an object', () => {
    expect(prop('name')(obj)).toEqual('mike');
  });
  test('should get a property in two steps', () => {
    const fn1 = prop('name');
    const result = fn1(obj);
    expect(result).toEqual('mike');
  });
});
