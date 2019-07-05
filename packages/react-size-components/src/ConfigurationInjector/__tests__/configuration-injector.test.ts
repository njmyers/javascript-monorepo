import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ConfigurationInjector from '../ConfigurationInjector';

describe('it works', () => {
  test('it errors without a valid config', () => {
    expect(() => ConfigurationInjector()).toThrow();
  });
});
