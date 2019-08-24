import { componentName, camelName } from "../args";

const reactFile = kebab =>
  `import * as React from 'react'
// types
import { Props, State } from './types'
// styles
import './${kebab}.sass'

class ${componentName(kebab)} extends React.Component<Props, State> {
  state = {}

  static defaultProps = {}

  componentDidMount() {
    return null;
  }

  render() {
    return (
      <section className="${camelName(kebab)}">
        ${componentName(kebab)}
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </section>
    )
  }
}

export default ${componentName(kebab)}
`;

export default reactFile;
