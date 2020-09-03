export default (n) => {
  if (typeof n !== 'number' || n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  // три 'border case' двойку включил, чтобы итератор проверял только нечет
  for (let i = 3; i <= (n / 2); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
