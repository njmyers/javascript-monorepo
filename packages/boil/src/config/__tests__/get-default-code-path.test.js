import getDefaultCodePath from "../get-default-code-path";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof getDefaultCodePath).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(getDefaultCodePath()).toMatchSnapshot();
  });
});
