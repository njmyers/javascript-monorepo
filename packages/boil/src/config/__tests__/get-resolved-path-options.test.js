import getResolvedPathOptions from "../get-resolved-path-options";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof getResolvedPathOptions()).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(getResolvedPathOptions()).toMatchSnapshot();
  });
});
