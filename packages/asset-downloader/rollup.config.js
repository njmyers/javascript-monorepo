import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [{ file: pkg.main, format: 'cjs', sourcemap: true }],
    external: ['fs', 'path', 'mime-types', 'commander'],
    plugins: [
      flow(),
      resolve(),
      builtins(),
      commonjs({
        namedExports: {
          '/node_modules/commander': ['program'],
        },
      }),
      babel({ exclude: 'node_modules/**' }),
    ],
  },
];
