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
