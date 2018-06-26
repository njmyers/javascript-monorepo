// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  block: string,
};

type ChildProps = {
  className?: string,
  element?: string | void,
  modifiers?: string | void | Array<string>,
};

class BEM extends React.Component<Props> {
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

  /**
   * Merges existing classNames with new generated classNames
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  mergeClassNames = (props: ChildProps) => {
    const safeElement = this.typeCheckElement(props.element);
    const safeModifiers = this.typeCheckModifiers(props.modifiers);

    const newClasses = this.getAllClasses(safeElement, safeModifiers);

    const className = props.className
      ? `${props.className} ${newClasses}`
      : newClasses;

    return { className };
  };

  /**
   * Checks whether react element is of DOM type
   * @param  {[type]}  type [description]
   * @return {Boolean}      [description]
   */
  isDOMElement = ({ type }: React.Element<any>): boolean => {
    return Boolean(typeof type === 'string');
  };

  /**
   * Checks if react element has children
   * @param  {[type]}  props [description]
   * @return {Boolean}       [description]
   */
  hasChildren = ({ props }: React.Element<any>): boolean => {
    return Boolean(props && props.children);
  };

  /**
   * Deeply maps react children but only if they are valid DOM elements
   * @param  {[type]} children  [description]
   * @param  {[type]} deepMapFn [description]
   * @return {[type]}           [description]
   */
  deepDOMMap = (children: React.Node, deepMapFn: (child: Node) => Node) => {
    return React.Children.map(children, (child) => {
      return React.isValidElement(child)
        ? // if not dom element do not traverse
          this.isDOMElement(child)
          ? this.hasChildren(child)
            ? deepMapFn(
                React.cloneElement(
                  child,
                  child.props,
                  this.deepDOMMap(child.props.children, deepMapFn)
                )
              )
            : deepMapFn(child)
          : child
        : child;
    });
  };

  render() {
    return this.deepDOMMap(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        ...this.mergeClassNames(child.props),
      });
      return child;
    });
  }
}

export default BEM;
