import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const external = [
  ...Object.keys(pkg.dependencies),
  'regenerator-runtime',
  '@babel/runtime/helpers/toConsumableArray',
  '@babel/runtime/helpers/asyncToGenerator',
  '@babel/runtime/helpers/typeof',
  '@babel/runtime/regenerator',
  '@babel/runtime/helpers/esm/toConsumableArray',
  '@babel/runtime/helpers/esm/asyncToGenerator',
  '@babel/runtime/helpers/esm/typeof',
];

export default [
  {
    input: 'src/index.js',
    external,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime'],
      }),
    ],
  },
  {
    input: 'src/index.js',
    external,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: true,
            },
          ],
        ],
      }),
    ],
  },
];
