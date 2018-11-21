import reduxIndexFile from "../redux-index-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reduxIndexFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reduxIndexFile("test-component")).toMatchSnapshot();
  });
});
