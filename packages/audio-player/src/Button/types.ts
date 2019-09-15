import * as React from 'react';
import { Props as IconProps } from '@fortawesome/react-fontawesome';

export interface Props extends IconProps {
  onClick: (e: React.MouseEvent<HTMLElement>, ...args: [any]) => void;
}
