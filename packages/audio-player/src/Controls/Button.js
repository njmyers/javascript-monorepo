import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.sass';

const Button = ({ icon = 'play', className, onClick, size } = {}) => {
  return (
    <button className={`audioPlayer_button ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Button;
