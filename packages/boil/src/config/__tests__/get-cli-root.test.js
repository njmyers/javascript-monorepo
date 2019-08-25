import getCliRoot from "../get-cli-root";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof getCliRoot()).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(getCliRoot()).toMatchSnapshot();
  });
});
