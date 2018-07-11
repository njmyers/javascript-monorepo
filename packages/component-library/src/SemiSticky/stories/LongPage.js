import React from 'react';
import LoremIpsum from '../../../../react-project-core/src/components/Scratch/LoremIpsum';

const LongPage = () => {
  return (
    <section>
      <h1>Random Long Content</h1>
      <p>
        <strong>Lets add some content to make this demo longer!</strong>
      </p>
      <LoremIpsum repeat={10} />
    </section>
  );
};

export default LongPage;
