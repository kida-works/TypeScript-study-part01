export default function unknownSanple() {
  const maybeNumber: unknown = 10;
  console.log('any sample 1:', typeof maybeNumber, maybeNumber);

  const isFoo = maybeNumber === 'foo';
  console.log('any sample 2:', typeof isFoo, isFoo);

  // const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10;
    console.log('any sample 3:', typeof sum, sum);
  }
}
