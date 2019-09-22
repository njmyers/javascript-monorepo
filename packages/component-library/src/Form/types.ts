export type Props = {
  as: 'input' | 'textarea';
  element: string;
  name: string;
  label?: string;
  block: string;
  modifiers?: string | Array<string> | void;
  className?: string;
  forwardedRef: React.RefObject<T>;
};
