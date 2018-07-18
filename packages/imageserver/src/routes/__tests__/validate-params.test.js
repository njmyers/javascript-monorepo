import {
  validateBlur,
  validateFormat,
  validateResize,
} from './validate-params';

describe('the parameter inputs are properly sanitized and validated', () => {
  test('validate blur', () => {
    expect(validateBlur(0)).toBe(0.3);
    expect(validateBlur(-0)).toBe(0.3);
    expect(validateBlur(-10)).toBe(0.3);
    expect(validateBlur(0.31)).toBe(0.31);
    expect(validateBlur(0.4)).toBe(0.4);
    expect(validateBlur(999)).toBe(999);
    expect(validateBlur(1000)).toBe(1000);
    expect(validateBlur(1001)).toBe(1000);
  });
});
