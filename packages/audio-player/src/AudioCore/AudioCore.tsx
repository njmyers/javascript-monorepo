// @ts-nocheck
import * as React from 'react';
import withSize from 'react-size-components';
// assets
import './library';
// styles
import './audio.sass';
import './range.sass';

import { usePlayer } from '../Context';

const AudioCore = ({ childRef, classPrefix, sizes, children }) => {
  const { state } = usePlayer();
  const { display } = state;

  return (
    <aside ref={childRef} className={`${classPrefix}_container`}>
      {display && (
        <div className={classPrefix}>
          {React.Children.toArray(children).map(child =>
            React.cloneElement(child, {
              classPrefix: classPrefix,
              sizes: sizes,
            })
          )}
        </div>
      )}
    </aside>
  );
};

export default withSize({ component: true, mobile: true })(AudioCore);
