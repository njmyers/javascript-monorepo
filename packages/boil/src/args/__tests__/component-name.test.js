import * as React from "react";
import componentName from "../component-name";

describe("it works", () => {
  test("it is a function ", () => {
    expect(typeof componentName).toBe("function");
  });

  test("it runs without crashing", () => {
    expect(componentName("kebab-case")).toMatchSnapshot();
  });

  test("it converts the name", () => {
    expect(componentName("kebab-case")).toBe("KebabCase");
  });
});
