import { useToggleButton } from '../use-prop-getters';
// types
import { ToggleButton } from '../use-prop-getters';

export interface ToggleComponent extends ToggleButton {
  children: Function;
}

function Toggle({ children, ...props }: ToggleComponent) {
  return children(useToggleButton(props));
}

export default Toggle;
