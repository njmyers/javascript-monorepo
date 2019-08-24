import React from "react";
import TestRenderer from "react-test-renderer";
import Pascal from "../Pascal";

describe("it works", () => {
  test("it loads without crashing", () => {
    const render = TestRenderer.create(<Pascal />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});
