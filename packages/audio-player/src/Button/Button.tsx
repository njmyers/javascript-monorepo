import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Props } from './types';

import './button.sass';

const Button = ({ onClick, icon, ...props }: Props) => (
  <button className={icon} onClick={onClick}>
    <FontAwesomeIcon icon={icon} {...props} />
  </button>
);

export default Button;
