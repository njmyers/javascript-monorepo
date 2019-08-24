import { kebabToTitle } from "smalldash";

const componentName = arg =>
  kebabToTitle(arg)
    .split(" ")
    .join("");

export default componentName;
