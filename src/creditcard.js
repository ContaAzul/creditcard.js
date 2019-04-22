import CARDS from './cards';

export const getCreditCardNameByNumber = number => {
  return (
    (CARDS.find(card => card.bins.test(number) && card) || {}).name ||
    'Credit card is invalid!'
  );
};

export const isSecurityCodeValid = (number, code) => {
  const numberLength = getCreditCardNameByNumber(number) === 'Amex' ? 4 : 3;
  return new RegExp(`^[0-9]{${numberLength}}$`).test(code);
};

export const isExpirationDateValid = (monthParam, yearParam) => {
  const month = parseInt(monthParam, 10);
  const year = parseInt(yearParam, 10);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (isNaN(month) || isNaN(year)) return false;

  if (year === currentYear && month < currentMonth) return false;

  if (month < 1 || month > 12) return false;

  return !(year < 1000 || year >= 3000);
};

export const isValid = number => {
  const invalidDigits = new RegExp('[^0-9- ]');
  let digits = number;

  if (invalidDigits.test(digits)) return false;

  digits = digits.replace(/\D/g, '');

  let sum = sumNumber(digits);
  return sum > 0 && sum % 10 === 0;
};

function sumNumber(number) {
  const computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
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
