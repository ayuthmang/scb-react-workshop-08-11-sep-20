export function divide(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number')
    throw new Error('x or y must be a number')

  return x / y
}
