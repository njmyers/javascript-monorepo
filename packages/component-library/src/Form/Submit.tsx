// @ts-nocheck

import * as React from 'react';
import Element from './Element';

const Submit = React.forwardRef((props, ref) => (
  <Element as="input" forwardedRef={ref} {...props} />
));

Submit.defaultProps = {
  name: 'submit',
  type: 'submit',
  value: 'submit',
  block: 'formInput',
  required: false,
  placeholder: '',
};

export default Submit;
