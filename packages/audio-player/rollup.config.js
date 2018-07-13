import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'react-redux',
      'smalldash',
      'redux',
      'howler',
      'redux-observable',
      'react-size-components',
      'rxjs',
    ],
    output: {
      name: 'withSize',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        smalldash: '__',
        lodash: '_',
      },
    },
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
  },
  {
    input: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'react-redux',
      'smalldash',
      'redux',
      'howler',
      'redux-observable',
      'react-size-components',
      'rxjs',
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
  },
];
