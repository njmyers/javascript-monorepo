import fs from 'fs';
import path from 'path';
import addContentStream from '../add-content-stream';
import readDirectoryKeys from '../read-directory-keys';

const keys = readDirectoryKeys(path.resolve(__dirname, 'helpers'));
const Key = keys[0];

const container = {
  Key,
};

const streamed = addContentStream(container);

test('add body key correctly', () => {
  expect(streamed).toHaveProperty('Body');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('readable');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('start');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('end');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('bytesRead');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('path');
});

test('duck type body as readable stream', () => {
  expect(streamed.Body).toHaveProperty('_readableState');
});
