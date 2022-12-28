# mb-lib

this is a small utility package for testing creating npm packages

These are the current functions in the library

- append
- Box
- compose
- curry
- Maybe
- prop
- Queue
- Stack

## append

This function just appends two strings

```js
    expect(append('thing')('some')).toEqual('something');
```

## Box

This function can be used to map over complex data to filter out the results

```js
    const items = Box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);
```

## compose

This function is used to compose other functions in a chainable point free fashion. 

```js
const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);

  const result = compose(addOne, addTwo);
  expect(result(arr)).toEqual([4, 5, 6, 7, 8, 9]);
```

## curry

This function can be used like Partial Application. You can lazily load arguments and when the function has received all the necessary arguments, then it will run the function

```js
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);

    const curriedSum = curry(sum);
    const fn1 = curriedSum(4);
    const result = fn1(5);
    expect(result).toEqual(9);
```

## prop

This function gets a property from an object

```js
    const fn1 = prop('name');
    const result = fn1(obj);
    expect(result).toEqual('mike');
```

## Maybe

This monad can be used when a null value could be expected from data received from a server

```js
    const maybeNumberOne = Maybe.just(5);
    const maybeNumberTwo = Maybe.nothing();

    expect(maybeNumberOne.isNothing()).toBeFalsy();
    expect(maybeNumberTwo.isNothing()).toBeTruthy();
```

## Queue

This is a First-in First-out data structure.

```js
    const queue = new Queue<string>();
    queue.enqueue('a');
    queue.enqueue('b');
    const result = queue.dequeue();
    expect(result).toEqual('a');
    expect(queue.size()).toEqual(1);
```

## Stack

This is First-in Last-out data structure.

```js
    const stack = new Stack<string>();
    stack.push('a');
    expect(stack.size()).toEqual(1);
    expect(stack.peek()).toEqual('a');
    stack.pop();
    expect(stack.size()).toEqual(0);
```
