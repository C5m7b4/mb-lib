import { append } from '../src';

describe('append', () => {
  test('should append two strings', () => {
    expect(append('thing')('some')).toEqual('something');
  });
});
