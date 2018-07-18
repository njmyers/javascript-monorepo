import fs from 'fs';

const addContentStream = (container) => ({
  ...container,
  Body: fs.readFileSync(container.Key),
});

export default addContentStream;
