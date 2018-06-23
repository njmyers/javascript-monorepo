import padDigits from '../pad-digits';
import padZero from '../pad-zero';

describe('it pads the digits', () => {
  test('it pads a zero correctly', () => {
    expect(padZero(4)).toBe('04');
    expect(padZero(9)).toBe('09');
    expect(padZero(19)).toBe('19');
    expect(padZero(10)).toBe('10');
  });
});
