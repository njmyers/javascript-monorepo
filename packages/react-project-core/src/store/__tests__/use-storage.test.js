import sinon from 'sinon';
import { useStorageStub } from '../use-storage';

const hour = 1000 * 60 * 60;
const day = 1000 * 60 * 60 * 24;
const week = 1000 * 60 * 60 * 24 * 7;

const REFRESH = day;
const INVALIDATE = Date.now() - week;

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test('returns false when refresh period is smaller than time passed and invalidate is in past', () => {
  const stub = useStorageStub(day)(Date.now - week);
  const STATEDATE = Date.now() - week;

  expect(stub(STATEDATE)).toBe(false);
});

test('returns false when refresh period is smaller than time passed and invalidate is in future', () => {
  const stub = useStorageStub(day)(Date.now + week);
  const STATEDATE = Date.now() - week;

  expect(stub(STATEDATE)).toBe(false);
});

test('returns true when refresh period is larger then time passed and invalidation date is in the past', () => {
  const stub = useStorageStub(day)(Date.now() - week);
  const STATEDATE = Date.now() - hour;

  expect(stub(STATEDATE)).toBe(true);
});

test('returns false when refresh period is larger then time passed and invalidation date is in the future', () => {
  const stub = useStorageStub(day)(Date.now() + week);
  const STATEDATE = Date.now() - hour;

  expect(stub(STATEDATE)).toBe(false);
});

test('returns false for before invalidation because of invalidation and after invalidation because of refresh', () => {
  const stub = useStorageStub(day)(Date.now() + day);
  const STATEDATE = Date.now() - hour;

  // because of invalidation
  expect(stub(STATEDATE)).toBe(false);
  // move up almost a day
  clock.tick(day - 10);
  // still because of invalidation
  expect(stub(STATEDATE)).toBe(false);
  // move up past a day
  clock.tick(100);
  // now because of refresh
  expect(stub(STATEDATE)).toBe(false);
});
