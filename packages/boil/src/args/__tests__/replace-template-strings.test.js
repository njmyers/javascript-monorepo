import replaceTemplateStrings from "../replace-template-strings";

describe("args/replace-template-strings", () => {
  test("it replaces correctly", () => {
    const string =
      "The kebab thing is camelCased with a Pascal one that UPPER is nice";

    const word = "some-kebab";

    const expected =
      "The some-kebab thing is someKebabCased with a SomeKebab one that SOME_KEBAB is nice";

    expect(replaceTemplateStrings(string, word)).toBe(expected);
  });
});
