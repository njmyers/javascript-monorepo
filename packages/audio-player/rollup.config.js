import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: [...Object.keys(pkg.dependencies), 'uuid/v1'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      resolve(),
      postcss({
        plugins: [autoprefixer],
        extract: 'build/style.css',
        sourceMap: true,
      }),
      babel({ exclude: 'node_modules/**' }),
      commonjs(),
    ],
  },
];
