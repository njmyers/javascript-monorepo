/** generate the strings for the flow types */
const flowType = ({ flowType } = {}) => {
  if (flowType) {
    switch (flowType.name) {
      case 'signature':
        // return JSON.stringify(flowType.signature.properties);
        return `<code>${flowType.raw.replace(/\n/gi, '<br>')}</code>`;
      case 'union':
        return `<code>${flowType.raw
          .replace(/\n/gi, '<br>')
          .replace(/\|/gi, `&#124;`)}</code>`;
      default:
        return `\`${flowType.name}\``;
    }
  }

  return '-';
};

/** generate the strings for the required param */
const required = ({ required } = {}) => (required ? 'true' : 'false');

/** generate the strings for the values */
const defaultValue = ({ defaultValue } = {}) =>
  defaultValue
    ? `<code>${JSON.stringify(defaultValue.value)
        .replace(/"/gi, '')
        .replace(/\\n/gi, '<br>')}</code>`
    : '-';

/** generate the strings for the table headings */
const tableHeading = () =>
  '| Prop Name | Type | Required | Default Value | Description |\n' +
  '|:----------|:-----|:---------|:--------------|:------------|';

/** generate the strings for the table row */
function generateTableRow(propName, prop) {
  return `|\`${propName}\`|${flowType(prop)}|${required(prop)}|${defaultValue(
    prop
  )}|_${prop.description}_|`;
}

function generateProps(props) {
  const title = '## Props';

  return (
    title +
    '\n' +
    tableHeading() +
    '\n' +
    Object.keys(props)
      .sort()
      .map(function(propName) {
        return generateTableRow(propName, props[propName]);
      })
      .join('\n')
  );
}

function generateMarkdown(reactAPI) {
  const markdownString = generateProps(reactAPI.props);

  return markdownString;
}

module.exports = generateMarkdown;
