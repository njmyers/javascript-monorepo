import padZero from './pad-zero';

const currencyString = (currencySymbol: string) => (number: number): string => {
  const base = Math.floor(number);
  const decimal = Math.round((number - base) * 100);
  return `${currencySymbol}${base.toString()}.${padZero(decimal)}`;
};

export default currencyString;
