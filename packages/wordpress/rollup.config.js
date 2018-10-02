import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import runtimes from '@njmyers/babel-runtime-files';
import pkg from './package.json';

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
  ...runtimes(),
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
      resolve({
        jsnext: true,
        main: true,
      }),
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
