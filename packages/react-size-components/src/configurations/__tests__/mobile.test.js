import createMobile from '../mobile';
import configProperties from './helpers/config-properties';

const mobile = createMobile(768);

describe('it is a configuration object', () => {
  test('it is a plain object', () => {
    expect(typeof mobile).toBe('object');
  });

  configProperties.forEach((prop) => {
    test(`it is a plain object with the ${prop} prop`, () => {
      expect(mobile).toHaveProperty(prop);
    });
  });

  test('its comparator function returns boolean true', () => {
    const mockWindow = { innerWidth: 800 };

    expect(mobile.fn(null, mockWindow)).toBe(false);
  });

  test('its comparator function returns boolean false', () => {
    const mockWindow = { innerWidth: 700 };

    expect(mobile.fn(null, mockWindow)).toBe(true);
  });

  test('it sets different breakpoints', () => {
    const mockWindow = { innerWidth: 999 };

    expect(createMobile(1000).fn(null, mockWindow)).toBe(true);
  });
});
