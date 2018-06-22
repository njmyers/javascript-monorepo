import React from 'react';

function ErrorMessage({ type = 'data' }) {
  return (
    <p className="error">
      There was a problem loading {type}. Please try again.
    </p>
  );
}

export default ErrorMessage;
