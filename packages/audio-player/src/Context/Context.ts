// @ts-nocheck
import { cloneElement } from 'react';
import usePlayer from './use-player';

function Context({ children }) {
  return cloneElement(children, usePlayer(), children);
}

export default Context;
