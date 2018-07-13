import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: '__',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
  },
];