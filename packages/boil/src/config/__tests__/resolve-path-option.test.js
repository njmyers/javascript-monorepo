import resolvePathOption from "../resolve-path-option";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof resolvePathOption()).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(resolvePathOption()).toMatchSnapshot();
  });
});
