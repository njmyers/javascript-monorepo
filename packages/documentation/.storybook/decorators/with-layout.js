import React from 'react';
// styles
import 'normalize.css';
import './layout.sass';

function withLayout(Story, props) {
  return (
    <article className="layout">
      <Story {...props} />
    </article>
  );
}

export default withLayout;
