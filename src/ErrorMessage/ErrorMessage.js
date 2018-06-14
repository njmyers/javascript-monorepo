// @flow
import * as React from 'react';

type Props = {
  type: string,
};

const ErrorMessage = ({ type = 'data' }: Props) => {
  return (
    <p className="error">
      There was a problem loading {type}. Please try again.
    </p>
  );
};

export default ErrorMessage;
