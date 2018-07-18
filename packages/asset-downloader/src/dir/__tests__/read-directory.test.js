import path from 'path';
import fs from 'fs';
import readDirectory from '../read-directory';

const buildDir = path.join(process.cwd(), 'build');
const files = readDirectory(buildDir);

test('add key correctly', () => {
  expect(files[0]).toHaveProperty('Key');
});

test('add stream correctly', () => {
  expect(files[0]).toHaveProperty('Body');
});

test('add content length key correctly', () => {
  expect(files[0]).toHaveProperty('ContentLength');
});

test('add content type key correctly', () => {
  expect(files[0]).toHaveProperty('ContentType');
});

test('add cache control key correctly', () => {
  expect(files[0]).toHaveProperty('CacheControl');
});
