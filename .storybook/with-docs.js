import React from 'react';
import withDocs from 'storybook-readme/with-docs';

const withDocsCustom = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        textAlign: 'left',
        padding: '1px 25px 25px 25px',
        margin: '25px 0',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  ),
  FooterComponent: ({ children }) => (
    <div
      style={{
        padding: '25px',
        background: 'rgba(246, 255, 0, 0.23)',
        borderTop: '2px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  ),
});

export default withDocsCustom;
