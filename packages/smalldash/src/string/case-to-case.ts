
type CaseToCase = (
  first: string
) => (second: string) => (str: string) => string;

const caseToCase: CaseToCase = (first) => (second) => (str) =>
  str.split(first).join(second);

export default caseToCase;
