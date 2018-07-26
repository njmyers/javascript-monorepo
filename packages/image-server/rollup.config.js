import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    external: [
      'rxjs',
      'http',
      'stream',
      'dotenv',
      'sharp',
      'aws-sdk',
      'axios',
      'mime',
      'qs',
      'bluebird',
    ],
    plugins: [
      flow(),
      resolve(),
      builtins(),
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
    ],
  },
];
