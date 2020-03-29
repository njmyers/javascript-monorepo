import { Props as IconProps } from '@fortawesome/react-fontawesome';

export type ButtonProps = JSX.IntrinsicElements['button'];
export interface Props extends ButtonProps {
  icon: IconProps['icon'];
  size: IconProps['size'];
}
