export type Reference = any | null;
export type ScriptElement = HTMLScriptElement | null;

export interface Options extends ElementCreationOptions {
  initialize: (window: Window) => Reference;
}
