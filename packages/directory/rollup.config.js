import { es6, cjs } from '@njmyers/rollup-config';
import pkg from './package.json';

const external = ['fs', 'path'];

const cjsConfig = cjs(pkg);
const es6Config = es6(pkg);

export default [
  {
    input: 'src/index.ts',
    ...cjsConfig,
    external: [...cjsConfig.external, ...external],
  },
  {
    input: 'src/index.ts',
    ...cjsConfig,
    external: [...cjsConfig.external, ...external],
  },
];
