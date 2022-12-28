import { Maybe, prop, append } from '../src';

describe('maybe', () => {
  test('should run a sucessful maybe', () => {
    const maybeNumberOne = Maybe.just(5);
    const maybeNumberTwo = Maybe.nothing();

    expect(maybeNumberOne.isNothing()).toBeFalsy();
    expect(maybeNumberTwo.isNothing()).toBeTruthy();
  });
  test('should be able to extract out the contents', () => {
    const maybeOne = Maybe.just(5);
    const mappedJust = maybeOne.map((x) => x + 1);
    expect(mappedJust.extract()).toEqual(6);
  });
  test('should return a maybe.nothing', () => {
    const badInput = Maybe.just(null);
    const mappedBadInput = badInput.map((x) => x + 1);
    expect(mappedBadInput.extract()).toBeNull();
  });
  test('should be able to chain functions', () => {
    const appendC = Maybe.chain(prop('b'), prop('c'), append(' is great'));

    const goodInput = Maybe.just({
      b: {
        c: 'fp',
      },
    });

    const badInput = Maybe.just({});

    expect(appendC(goodInput).extract()).toEqual('fp is great');
    expect(appendC(badInput).extract()).toBeNull();
  });
});
