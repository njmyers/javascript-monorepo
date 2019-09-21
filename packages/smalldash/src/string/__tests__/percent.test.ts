import percent from '../percent';

test('percent string', () => {
  expect(percent(80, 100)).toBe('80%');
});
