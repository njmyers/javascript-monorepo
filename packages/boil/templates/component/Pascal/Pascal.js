import React from "react";
// types
import { Props } from "./types";
// styles
import "./kebab.sass";

function Pascal(props): Props {
  return (
    <section className="camel">
      {Pascal}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </section>
  );
}

export default Pascal;
