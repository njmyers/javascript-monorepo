import React from 'react';
// types
import { Props } from './types';
// styles
import './kebab-case.sass';

function PascalCase(props): Props {
  return (
    <section className="camelCase">
      {PascalCase}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </section>
  );
}

export default PascalCase;
