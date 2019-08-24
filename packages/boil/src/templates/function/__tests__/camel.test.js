import camel from "../kebab";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof camel()).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(camel()).toMatchSnapshot();
  });
});
