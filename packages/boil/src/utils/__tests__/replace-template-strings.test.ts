import replaceTemplateStrings from '../replace-template-strings';

describe('utils/replaceTemplateStrings', () => {
  test('it is a function ', () => {
    expect(typeof replaceTemplateStrings).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(replaceTemplateStrings('', '')).toBe('');
  });

  const testCases = [
    ['some camelCase', 'some replacedWord'],
    ['some PascalCase', 'some ReplacedWord'],
    ['some kebab-case', 'some replaced-word'],
    ['some KEBAB-CASE', 'some REPLACED-WORD'],
    ['some snake_case', 'some replaced_word'],
    ['some SNAKE_CASE', 'some REPLACED_WORD'],
  ];

  testCases.forEach(([string, expected]) => {
    test(`it replaces the input string ${string} with the expected output ${expected}`, () => {
      expect(replaceTemplateStrings(string, 'replaced-word')).toBe(expected);
    });
  });

  test('it replaces complicated strings correctly', () => {
    const string =
      'The kebab-case thing is camelCase with a PascalCase one that SNAKE_CASE is nice';

    const word = 'some-kebab';

    const expected =
      'The some-kebab thing is someKebab with a SomeKebab one that SOME_KEBAB is nice';

    expect(replaceTemplateStrings(string, word)).toBe(expected);
  });
});
