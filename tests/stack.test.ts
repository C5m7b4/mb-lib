import { Stack } from '../src';
import { data } from './data';

type IProduct = {
  id: number;
  upc: string;
  description: string;
  price: number;
  dept: number;
  category: number;
  vendor: number;
};

describe('stack', () => {
  test('should return proper size of the stack when 1 item is added', () => {
    const stack = new Stack<string>();
    stack.push('a');
    expect(stack.size()).toEqual(1);
    expect(stack.peek()).toEqual('a');
    stack.pop();
    expect(stack.size()).toEqual(0);
  });
  test('should test capacity', () => {
    const stack = new Stack<string>(2);
    try {
      stack.push('a');
      stack.push('b');
      stack.push('c');
    } catch (error) {}
    expect(stack.size()).toEqual(2);
  });
  test('should handle and array of objects', () => {
    const stack = new Stack<IProduct>();
    data.forEach((item) => {
      stack.push(item);
    });
    expect(stack.size()).toEqual(4);
    expect(stack.peek()).toEqual({
      id: 4,
      upc: '4',
      description: 'dr pepper',
      price: 3.65,
      dept: 1,
      category: 1,
      vendor: 1,
    });
  });
});
