// @ts-nocheck
import * as utils from '../utils';

describe('TrackInfo/utils', () => {
  describe('formatTime', () => {
    describe('falsey arguments', () => {
      test('it returns "0:00" when the argument is "false"', () => {
        expect(utils.formatTime(false)).toBe('0:00');
      });

      test('it returns "0:00" when the argument is "undefined"', () => {
        expect(utils.formatTime(undefined)).toBe('0:00');
      });

      test('it returns "0:00" when the argument is "null"', () => {
        expect(utils.formatTime(null)).toBe('0:00');
      });
    });

    describe('number arguments', () => {
      test('it returns "0:01" when the argument is 1', () => {
        expect(utils.formatTime(1)).toBe('0:01');
      });

      test('it returns "1:01" when the argument is 61', () => {
        expect(utils.formatTime(61)).toBe('1:01');
      });

      test('it returns "0:01" when the argument is 1.34', () => {
        expect(utils.formatTime(1.34)).toBe('0:01');
      });
    });
  });

  describe('formatSeconds', () => {
    describe('number arguments', () => {
      test('it returns "01" when the argument is 1', () => {
        expect(utils.formatSeconds(1)).toBe('01');
      });

      test('it returns "11" when the argument is 11', () => {
        expect(utils.formatSeconds(11)).toBe('11');
      });
    });
  });
});
