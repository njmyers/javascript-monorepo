import generateID from '../generate-id';

test('generate 6 char id', () => {
  const length = generateID().length;
  expect(length).toBe(8);
});

test('passes hex regex', () => {
  const regex = /[a-f0-9]/gi;
  const id = generateID();
  expect(regex.test(id)).toBe(true);
});
