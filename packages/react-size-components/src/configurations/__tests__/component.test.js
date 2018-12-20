import component from '../component';
import configProperties from './helpers/config-properties';

describe('it is a configuration object', () => {
  test('it is a plain object', () => {
    expect(typeof component).toBe('object');
  });

  configProperties.forEach((prop) => {
    test(`it is a plain object with the ${prop} prop`, () => {
      expect(component).toHaveProperty(prop);
    });
  });

  test('its comparator function returns the correct values', () => {
    const mockDOMNode = { clientHeight: 1000, clientWidth: 600 };
    const expected = { height: 1000, width: 600 };

    expect(component.fn(mockDOMNode)).toMatchObject(expected);
  });
});
