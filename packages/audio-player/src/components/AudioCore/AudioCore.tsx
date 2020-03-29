import * as React from 'react';
import withSize from 'react-size-components';
// assets
import './library';
// styles
import './audio.sass';
import './range.sass';

import { usePlayer } from '../Context';

interface Props {
  childRef: React.MutableRefObject<HTMLDivElement>;
  classPrefix: string;
  sizes: {
    mobile: boolean;
    component: {
      width: number;
      height: number;
    };
  };
}

const AudioCore: React.FC<Props> = ({
  childRef,
  classPrefix,
  sizes,
  children,
}) => {
  const { state } = usePlayer();
  const { display } = state;

  return (
    <aside ref={childRef} className={`${classPrefix}_container`}>
      {display && (
        <div className={classPrefix}>
          {React.Children.toArray(children).map(child => {
            if (!React.isValidElement(child)) {
              return child;
            }

            return React.cloneElement(child, {
              classPrefix: classPrefix,
              sizes: sizes,
            });
          })}
        </div>
      )}
    </aside>
  );
};

export default withSize({ component: true, mobile: true })(AudioCore);
