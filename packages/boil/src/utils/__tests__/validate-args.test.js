import validateArgs from "../validate-args";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof validateArgs()).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(validateArgs()).toMatchSnapshot();
  });
});
