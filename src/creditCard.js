import CREDIT_CARD_LIST from './creditCardList';
export { isValid } from './helpers/luhn';

export function getCreditCardNameByNumber(number) {
  let messageResult = 'Credit card is invalid!';

  CREDIT_CARD_LIST.find(creditcard => {
    let regex = new RegExp(creditcard.regexpFull);

    if (regex.test(number)) {
      messageResult = creditcard.name;
    }
  });

  return messageResult;
}

export function isSecurityCodeValid(number, code) {
  let brand = getCreditCardNameByNumber(number);
  let numberLength;

  numberLength = brand === 'Amex' ? 4 : 3;
  let regex = new RegExp(`^[0-9]{${numberLength}}$`);

  return regex.test(code);
}

export function isExpirationDateValid(paramMonth, paramYearn) {
  const month = parseInt(paramMonth, 10);
  const year = parseInt(paramYearn, 10);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (isNaN(month) || isNaN(year)) return false;

  if (year === currentYear && month < currentMonth) return false;

  if (month < 1 || month > 12) return false;

  return !(year < 1000 || year >= 3000);
}
