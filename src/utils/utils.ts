export const concatNumbers = (a: number, b: number) => {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('Argument exception');

  if (a > b) return `${a}_${b}`;

  return `${b}_${a}`;
};
