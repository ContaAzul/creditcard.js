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

export const isExpirationDateValid = (month, year) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return (
    !isNaN(month) &&
    !isNaN(year) &&
    year !== currentYear &&
    month >= currentMonth &&
    month >= 1 &&
    month <= 12 &&
    year >= 1000 &&
    year < 3000
  );
};

export const isValid = number => {
  const invalidDigits = new RegExp('[^0-9- ]');

  if (invalidDigits.test(number)) return false;

  const sum = sumNumber(number.replace(/\D/g, ''));
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
