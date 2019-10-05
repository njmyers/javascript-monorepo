import templateTokens from './template-tokens';

const replaceTemplateStrings = (string, kebab) =>
  templateTokens.reduce((prevString, nextReplacer) => {
    const { fn, token } = nextReplacer;
    const regex = new RegExp(token, 'g');

    return prevString.replace(regex, fn(kebab));
  }, string);

export default replaceTemplateStrings;
