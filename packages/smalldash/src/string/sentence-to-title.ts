import acceptStrings from './accept-strings';
import compose from '../functional/compose';

type SentenceToTitle = (string: string) => string;

/**
 * Converts sentence case to Title Case
 * @type {[type]}
 */
const _sentenceToTitle: SentenceToTitle = (string) =>
  string
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');

const sentenceToTitle = compose(
  _sentenceToTitle,
  acceptStrings
);

export default sentenceToTitle;
