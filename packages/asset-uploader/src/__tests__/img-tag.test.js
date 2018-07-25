import fs from 'fs';
import path from 'path';
import directory from '@njmyers/directory';
import { _findImageTag } from '../img-tag';

const filePath = directory(path.resolve(__dirname, 'helpers/index.html'));
const file = fs.readFileSync(filePath[0]).toString();

describe('tests the image tag regex engine', () => {
  test('it finds tags in a string', () => {
    expect(_findImageTag(file)).toMatchObject([]);
  });
});
