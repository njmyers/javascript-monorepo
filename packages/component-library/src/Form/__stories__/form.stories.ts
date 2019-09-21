/** @flow */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../index';

storiesOf('@njmyers/component-library|8) Form', module).add('Demo', () => (
  <form>
    <Form.Input />
  </form>
));
