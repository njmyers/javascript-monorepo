import reactTestFile from "../react-test-file";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof reactTestFile).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(reactTestFile("test-component")).toMatchSnapshot();
  });
});
