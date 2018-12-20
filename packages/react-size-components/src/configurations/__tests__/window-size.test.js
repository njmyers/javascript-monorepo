import windowSize from '../window-size';
import configProperties from './helpers/config-properties';

describe('it is a configuration object', () => {
  test('it is a plain object', () => {
    expect(typeof windowSize).toBe('object');
  });

  configProperties.forEach((prop) => {
    test(`it is a plain object with the ${prop} prop`, () => {
      expect(windowSize).toHaveProperty(prop);
    });
  });

  test('its comparator function returns the correct sizes', () => {
    const mockWindow = {
      innerHeight: 1000,
      innerWidth: 600,
      outerWidth: 1200,
      outerHeight: 800,
    };

    expect(windowSize.fn(null, mockWindow)).toMatchObject(mockWindow);
  });
});
