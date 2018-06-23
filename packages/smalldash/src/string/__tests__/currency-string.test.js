import _currencyString from '../currency-string';

const dollarString = _currencyString('$');

describe('It renders currency strings correctly', () => {
  test('It curries the $ sign and renders the numbers correctly', () => {
    expect(dollarString(4)).toBe('$4.00');
    expect(dollarString(4.09)).toBe('$4.09');
    expect(dollarString(4.9)).toBe('$4.90');
    expect(dollarString(40.09)).toBe('$40.09');
    expect(dollarString(40.9)).toBe('$40.90');
    expect(dollarString(40.1)).toBe('$40.10');
  });
});
