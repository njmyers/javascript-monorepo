import composeAsync from '../compose-async';

const add = (a) => a + 1;

const addSlowly = (timeout) => (value) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(value + 1), timeout);
  });
};

const makeErrorSlowly = (timeout) => (message) => () => {
  return new Promise((res, rej) => {
    setTimeout(() => rej(new Error(message)), timeout);
  });
};

const err = 'something happened';

const addOneSlowly = addSlowly(200);
const errorSlowly = makeErrorSlowly(200)(err);

test('calling compose async has no errors', async () => {
  try {
    await composeAsync(add, add);
  } catch (e) {
    expect(e).not.toBeInstanceOf(Error);
  }
});

test('calling compose async with args has no errors', async () => {
  try {
    await composeAsync(add, add)(1);
  } catch (e) {
    expect(e).not.toBeInstanceOf(Error);
  }
});

test('calling compose async with synchonous functions', async () => {
  try {
    const result = await composeAsync(add, add, add)(1);
    expect(result).toBe(4);
  } catch (e) {
    expect(e).not.toBeInstanceOf(Error);
  }
});

test('calling compose async with async functions for end result', async () => {
  const addThreeSlowly = composeAsync(addOneSlowly, addOneSlowly, addOneSlowly);
  try {
    const result = await addThreeSlowly(1);
    expect(result).toBe(4);
  } catch (e) {
    expect(e).not.toBeInstanceOf(Error);
  }
});

test('compose multiple functions and catch errors', async () => {
  const addTwoSlowlyWithError = composeAsync(
    addOneSlowly,
    errorSlowly,
    addOneSlowly
  );
  try {
    const result = await addTwoSlowlyWithError(1);
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
  }
});
