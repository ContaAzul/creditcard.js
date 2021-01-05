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
  return (
    isValidMonth(month) &&
    isValidYear(year) &&
    isFutureOrPresentDate(month, year)
  );
};

export const isValid = number => {
  const invalidDigits = new RegExp('[^0-9- ]');

  if (invalidDigits.test(number)) return false;

  const sum = sumNumber(number.replace(/\D/g, ''));
  return sum > 0 && sum % 10 === 0;
};

function isValidMonth(month) {
  return !isNaN(month) && month >= 1 && month <= 12;
}

function isValidYear(year) {
  return !isNaN(year) && isValidFullYear(formatFullYear(year));
}

function formatFullYear(year) {
  if (year.length === 4) return year;

  if (year.length === 2) {
    return parseInt(year) + 2000;
  }

  return 0;
}

function isValidFullYear(year) {
  return year >= 2000 && year <= 2999;
}

function isFutureOrPresentDate(month, year) {
  const fullYear = formatFullYear(year);
  const currentDate = new Date();
  const expirationDate = new Date();

  currentDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), 1);
  expirationDate.setFullYear(fullYear, month - 1, 1);

  return currentDate <= expirationDate;
}

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
