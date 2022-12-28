import { Queue } from '../src';

describe('queue', () => {
  test('should return the correct size', () => {
    const queue = new Queue<string>();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).toEqual(2);
  });
  test('should dequeue properly', () => {
    const queue = new Queue<string>();
    queue.enqueue('a');
    queue.enqueue('b');
    const result = queue.dequeue();
    expect(result).toEqual('a');
    expect(queue.size()).toEqual(1);
  });
  test('should test capacity', () => {
    const queue = new Queue<string>(2);
    try {
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
    } catch (error) {}
    expect(queue.size()).toEqual(2);
  });
});
