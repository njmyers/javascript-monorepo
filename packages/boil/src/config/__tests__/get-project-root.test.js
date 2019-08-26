import getProjectRoot from "../get-project-root";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof getProjectRoot).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(getProjectRoot()).toMatchSnapshot();
  });
});
