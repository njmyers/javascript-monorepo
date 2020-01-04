const unitString = (unit: string) => (value: string): string =>
  `${value}${unit}`;

export default unitString;
