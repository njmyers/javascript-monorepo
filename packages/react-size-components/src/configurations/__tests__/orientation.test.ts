import orientation from '../orientation';
import configProperties from './helpers/config-properties';

describe('it is a configuration object', () => {
  test('it is a plain object', () => {
    expect(typeof orientation).toBe('object');
  });

  configProperties.forEach((prop) => {
    test(`it is a plain object with the ${prop} prop`, () => {
      expect(orientation).toHaveProperty(prop);
    });
  });

  test('its comparator function returns the correct portrait orientation', () => {
    const mockWindow = {
      innerHeight: 1000,
      innerWidth: 600,
    };

    expect(orientation.fn(null, mockWindow)).toBe('portrait');
  });

  test('its comparator function returns the correct landscape orientation', () => {
    const mockWindow = {
      innerHeight: 600,
      innerWidth: 1000,
    };

    expect(orientation.fn(null, mockWindow)).toBe('landscape');
  });
});
