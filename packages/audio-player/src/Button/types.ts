import * as React from 'react';
import { Props as IconProps } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, ...args: [any]) => void;
}

export type Props = IconProps & ButtonProps;
