// @ts-nocheck
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Props } from './types';

import './button.sass';

const Button = ({ onClick, icon, ...props }: Props) => {
  const name = icon;

  return (
    <button
      type="button"
      className={name}
      name={name}
      aria-label={name}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} {...props} />
    </button>
  );
};

export default Button;
