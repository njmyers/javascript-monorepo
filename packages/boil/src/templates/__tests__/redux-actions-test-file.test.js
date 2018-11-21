import reduxActionsTestFile from "../redux-actions-test-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reduxActionsTestFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reduxActionsTestFile("test-component")).toMatchSnapshot();
  });
});
