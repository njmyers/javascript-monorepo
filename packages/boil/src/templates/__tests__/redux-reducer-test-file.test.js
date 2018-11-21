import reduxReducerTestFile from "../redux-reducer-test-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reduxReducerTestFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reduxReducerTestFile("test-component")).toMatchSnapshot();
  });
});
