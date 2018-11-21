import reduxReducerFile from "../redux-reducer-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reduxReducerFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reduxReducerFile("test-component")).toMatchSnapshot();
  });
});
