export type Reference = any | null;
export type ScriptElement = HTMLScriptElement | null;

export type Options = {
  id: string;
  src: string;
  initialize: (window: Window) => Reference;
};
