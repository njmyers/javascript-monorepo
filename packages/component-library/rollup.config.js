import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'smalldash', 'react-size-components'],
    output: {
      name: 'njmyersComponentLibrary',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-size-components': 'withSize',
      },
    },
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
  },
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'smalldash', 'react-size-components'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
  },
];
