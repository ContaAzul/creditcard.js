const computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

function _sum(number) {
  let sum = 0;
  let digit = 0;
  let i = number.length;
  let even = true;

  while (i--) {
    digit = Number(number[i]);
    sum += (even = !even) ? computed[digit] : digit;
  }

  return sum;
}

export function isValid(number) {
  let regex = new RegExp('/[^0-9-\s]+/');
  let digits = number;

  if (regex.test(digits))
    return false;

  digits = digits.replace(/\D/g, '');

  let sum = _sum(digits);
  return sum > 0 && sum % 10 === 0;
}
