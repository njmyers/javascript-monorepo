const padDigits = (pad: string) => (num: number): string =>
  num < 10 ? `${pad}${num}` : num.toString();

export default padDigits;
