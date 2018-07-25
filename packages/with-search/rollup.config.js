import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  // {
  //   input: 'src/index.js',
  //   external: ['react', 'react-dom', 'react-router-dom', 'query-string'],
  //   output: {
  //     name: 'withQuery',
  //     file: pkg.browser,
  //     format: 'umd',
  //     sourcemap: true,
  //     globals: {
  //       react: 'React',
  //       'react-dom': 'ReactDOM',
  //       'query-string': 'queryString',
  //     },
  //   },
  //   plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
  // },
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'react-router-dom', 'query-string'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
  },
];
