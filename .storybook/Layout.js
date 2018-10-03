import React from 'react';
// styles
import 'normalize.css';
import './style.sass';

const Layout = ({ children }) => (
  <article className="layout">{children}</article>
);

export default Layout;
