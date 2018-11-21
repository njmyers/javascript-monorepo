import path from "path";
import directory from "@njmyers/directory";
import resolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import runtimes from "@njmyers/babel-runtime-files";
import pkg from "./package.json";

const external = [
  ...Object.keys(pkg.dependencies),
  ...runtimes(),
  "fs",
  "path"
];

const entries = directory("src/clis", {
  absolute: true,
  recursive: false,
  filter: "js"
});

const config = {
  external,
  output: {
    file: pkg.main,
    format: "cjs",
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    json(),
    builtins(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-transform-runtime"]
    })
  ]
};

export default [
  ...entries.map(entry => ({
    ...config,
    input: entry.path,
    output: {
      file: `build/${path.basename(entry.path, ".js")}.cjs.js`,
      format: "cjs",
      sourcemap: true
    }
  })),
  ...entries.map(entry => ({
    ...config,
    input: entry.path,
    output: {
      file: `build/${path.basename(entry.path, ".js")}.esm.js`,
      format: "esm",
      sourcemap: true
    }
  })),
  {
    ...config,
    input: "src/program.js",
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true
    }
  },
  {
    ...config,
    input: "src/program.js",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    }
  }
];
