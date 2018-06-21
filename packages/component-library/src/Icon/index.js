// @flow
import * as React from 'react';
import Circle from './Circle';
import Arrow from './Arrow';
import Hamburger from './Hamburger';
import Cross from './Cross';
import Caret from './Caret';
import Ring from './Ring';
import RingSlash from './RingSlash';
import Plus from './Plus';
import Minus from './Minus';
import Bag from './Bag';

function configure(newProps: {}) {
  const Copy = {};
  // copy components with new props
  Object.keys(this).forEach((key) => {
    const Clone = this[key];
    Copy[key] = (props) => <Clone {...props} {...newProps} />;
  });
  // manually reassign non enumerable method
  Copy.configure = this.configure;
  // manually make the new method non enumerable
  Object.defineProperty(Copy, 'configure', { enumerable: false });

  return Object.freeze(Copy);
}

const Icons = {
  Circle,
  Arrow,
  Hamburger,
  Cross,
  Caret,
  Ring,
  RingSlash,
  Plus,
  Minus,
  Bag,
  configure,
};

Object.defineProperty(Icons, 'configure', { enumerable: false });

export default Object.freeze(Icons);
