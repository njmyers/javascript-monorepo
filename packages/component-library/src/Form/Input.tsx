// @ts-nocheck
import * as React from 'react';
import Element from './Element';
import { Props } from './Types';

const Input = React.forwardRef((props: Props, ref) => (
  <Element as="input" forwardedRef={ref} {...props} />
));

Input.defaultProps = {
  type: 'text',
  name: 'input',
  required: false,
  block: 'formInput',
  placeholder: '',
};

export default Input;
