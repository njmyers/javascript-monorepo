import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: [...Object.keys(pkg.dependencies)],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      resolve({
        jsnext: true,
        main: true,
      }),
      babel({ exclude: 'node_modules/**' }),
      visualizer(),
    ],
  },
];
