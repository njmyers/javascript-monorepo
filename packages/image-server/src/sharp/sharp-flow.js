import getOriginalImage from './get-original-image';
import createSharpStream, { validateFormat } from './create-sharp-stream';
import { startSharpTimer, endSharpTimer } from './log-sharp-flow';

const sharpFlow = (options) =>
  [
    options.debug ? startSharpTimer : null,
    getOriginalImage,
    createSharpStream,
    options.debug ? endSharpTimer : null,
  ].filter((method) => method);

export default sharpFlow;

export { validateFormat };
