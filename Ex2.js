// Greatest common divisor
function mygcd(a, b) {
  // Handle edge cases: if either number is 0, the GCD is the other number
  if (a === 0) return b;
  if (b === 0) return a;

  // Use the Euclidean algorithm to find the GCD
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(mygcd(36, 12));
