import templateStrings from "./template-strings";

const replaceTemplateStrings = (string, kebab) =>
  templateStrings.reduce((prevString, nextReplacer) => {
    const { fn, token } = nextReplacer;
    const regex = new RegExp(token, "g");

    return prevString.replace(regex, fn(kebab));
  }, string);

export default replaceTemplateStrings;
