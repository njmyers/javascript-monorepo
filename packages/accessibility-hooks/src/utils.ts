import uuid from 'uuid/v1';

export function uniqueId() {
  return uuid().slice(-12);
}
