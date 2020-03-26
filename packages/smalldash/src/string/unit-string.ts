const unitString = (unit: string) => (value: string | number): string =>
  `${value}${unit}`;

export default unitString;
