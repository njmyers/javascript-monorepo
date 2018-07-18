import getOriginalImage from './get-original-image';
import createSharpStream, { validateFormat } from './create-sharp-stream';
import { startSharpTimer, endSharpTimer } from './log-sharp-flow';

export default [
  startSharpTimer,
  getOriginalImage,
  createSharpStream,
  endSharpTimer,
];

export { validateFormat };
