import CARDS from './cards';

const MILLENNIUM = 1000;
const DEFAULT_CODE_LENGTH = 3;
const CARD_NUMBER_LENGTH = 16;

export const getCreditCardNameByNumber = (number) => {
  return findCreditCardObjectByNumber(number).name || 'Credit card is invalid!';
};

export const isSecurityCodeValid = (creditCardNumber, securityCode) => {
  const numberLength = getCreditCardCodeLengthByNumber(creditCardNumber);
  return new RegExp(`^[0-9]{${numberLength}}$`).test(securityCode);
};

export const isExpirationDateValid = (month, year) => {
  return (
    isValidMonth(month) &&
    isValidYear(year) &&
    isFutureOrPresentDate(month, year)
  );
};

export const isValid = (number, options = {}) => {
  const { cards } = options;
  const rawNumber = removeNonNumbersCaracteres(number);

  if (hasSomeInvalidDigit(number) || !hasCorrectLength(rawNumber)) {
    return false;
  }

  const sum = sumNumber(rawNumber);

  return checkSum(sum) && validateCardsWhenRequired(number, cards);
};

function validateCardsWhenRequired(number, cards) {
  return !cards || !cards.length || validateCards(number, cards);
}

function validateCards(number, cards) {
  return (
    areCardsSupported(cards) &&
    cards
      .map((c) => c.toLowerCase())
      .includes(getCreditCardNameByNumber(number).toLowerCase())
  );
}

function hasCorrectLength(number) {
  return number && number.length === CARD_NUMBER_LENGTH;
}

function removeNonNumbersCaracteres(number) {
  return number.replace(/\D/g, '');
}

function hasSomeInvalidDigit(creditcardNumber) {
  const invalidDigits = new RegExp('[^0-9- ]');
  return invalidDigits.test(creditcardNumber);
}

function checkSum(sum) {
  return sum > 0 && sum % 10 === 0;
}

function areCardsSupported(passedCards) {
  const supportedCards = CARDS.map((c) => c.name.toLowerCase());
  return passedCards.every((c) => supportedCards.includes(c.toLowerCase()));
}

function findCreditCardObjectByNumber(number) {
  if (!number) return {};
  const numberOnly = number.replace(/[^\d]/g, '');
  return CARDS.find((card) => card.bins.test(numberOnly) && card) || {};
}

function getCreditCardCodeLengthByNumber(number) {
  return findCreditCardObjectByNumber(number).codeLength || DEFAULT_CODE_LENGTH;
}

function isValidMonth(month) {
  return !isNaN(month) && month >= 1 && month <= 12;
}

function isValidYear(year) {
  return !isNaN(year) && isValidFullYear(formatFullYear(year));
}

function formatFullYear(year) {
  if (year.length === 2) return dateRange(year);

  return year.length === 4 ? year : 0;
}

function dateRange(increaseYear = 0) {
  const year = parseInt(increaseYear);
  const today = new Date();
  return Math.floor(today.getFullYear() / MILLENNIUM) * MILLENNIUM + year;
}

function isValidFullYear(year) {
  return year >= dateRange() && year <= dateRange(MILLENNIUM);
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
