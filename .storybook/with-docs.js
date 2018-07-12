import { withDocs } from 'storybook-readme';

const withDocsCustom = withDocs({
  PreviewComponent: (props) => (
    <div
      style={{
        position: 'relative',
        boxSizing: 'border-box',
        margin: '16px 0 16px 0',
        padding: '0',
        border: '1px dashed #e5e5e5',
        backgroundColor: '#ffffff',
        transition: 'background-color 0.2s',
        textAlign: 'center',
      }}
    >
      {props.children}
    </div>
  ),
});

export default withDocs;
