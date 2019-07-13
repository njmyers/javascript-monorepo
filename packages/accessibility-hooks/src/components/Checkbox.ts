import { useCheckbox } from '../use-prop-getters';
// types
import { Checkbox as CheckboxType } from '../use-prop-getters';

export interface CheckboxComponent extends CheckboxType {
  children: Function;
}

function Checkbox({ children, ...props }: CheckboxComponent) {
  return children(useCheckbox(props));
}

export default Checkbox;
