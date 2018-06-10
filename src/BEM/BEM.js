// @flow
import * as React from 'react';
import Children from 'react-children-utilities';

type Props = {
  children: React.Node,
  block: string,
};

type ChildProps = {
  className?: string,
  element?: string | void,
  modifiers?: string | void | Array<string>,
};

class BEM extends React.PureComponent<Props> {
  static defaultProps = {
    children: null,
    block: '',
  };

  // coerce modifiers to array with at least one empty string
  typeCheckModifiers = (modifiers: string | Array<string> = '') => {
    return Array.isArray(modifiers)
      ? ['', ...modifiers]
      : modifiers
        ? ['', modifiers]
        : [''];
  };

  // coerce element to empty string
  typeCheckElement = (element: string = '') => element;

  /** Calculates correct classNames
    1. block_element-modifier
    2. block-modifier
    3. element
    4. element-modifier
  */
  getClassName = (block: string, element: string, modifier: string) => {
    return block
      ? element
        ? modifier
          ? `${block}_${element}-${modifier}`
          : `${block}_${element}`
        : modifier
          ? `${block}-${modifier}`
          : block
      : modifier
        ? `${element}-${modifier}`
        : element;
  };

  getAllClasses = (element: string, modifiers: Array<string>) => {
    return modifiers
      .map((modifier) => this.getClassName(this.props.block, element, modifier))
      .reduce((a, b) => (a ? `${a} ${b}` : b), '');
  };

  mergeClassNames = (props: ChildProps) => {
    const safeElement = this.typeCheckElement(props.element);
    const safeModifiers = this.typeCheckModifiers(props.modifiers);

    const newClasses = this.getAllClasses(safeElement, safeModifiers);

    const className = props.className
      ? `${props.className} ${newClasses}`
      : newClasses;

    return { className };
  };

  render() {
    return Children.deepMap(this.props.children, (element: React.Node) => {
      console.log('deep mapping');
      return React.isValidElement(element)
        ? typeof element.type !== 'function'
          ? React.cloneElement(element, this.mergeClassNames(element.props))
          : React.cloneElement(element)
        : null;
    });
  }
}

export default BEM;
