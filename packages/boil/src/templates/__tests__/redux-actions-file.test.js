import reduxActionsFile from "../redux-actions-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reduxActionsFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reduxActionsFile("test-component")).toMatchSnapshot();
  });
});
