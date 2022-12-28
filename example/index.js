import { data } from '../tests/data';
import { Box } from '../src';

const items = Box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => x.filter((i) => i.price < 3.0))
  .fold((x) => x);

console.log(items);

import { Maybe, prop, append } from '../src';

const badInput = Maybe.just({});
console.log(badInput.extract());

const appendC = Maybe.chain(prop('b'), prop('c'), append(' is great'));
const goodInput = Maybe.just({
  b: {
    c: 'fp',
  },
});

console.log(appendC(goodInput).extract());
const result = appendC(badInput);
console.log(result.extract());
