import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.sass';

const Button = ({
  icon = 'play',
  className,
  classPrefix,
  onClick,
  size,
} = {}) => {
  return (
    <button className={`${classPrefix}_button ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Button;
