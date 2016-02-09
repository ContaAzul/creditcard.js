import CreditCardList from './creditCardList';
import Luhn from './helpers/luhn';

export default class CreditCard {
  constructor() {
    this.creditcardlist = new CreditCardList();
    this.luhn = new Luhn();
  }

  retrieveCreditCardList() {
    return this.creditcardlist.retrieveCreditCardList();
  }

  isValid(number) {
    return this.luhn.isValid(number);
  }

  getCreditCardNameByNumber(number) {
    const INVALID_CARD_MESSAGE = 'Credit card is invalid!';
    if (!this.isValid(number))
      return INVALID_CARD_MESSAGE;

    let CREDIT_CARD_LIST = this.retrieveCreditCardList();

    for (let i = 0; i < CREDIT_CARD_LIST.length; i++) {
      let creditcard = CREDIT_CARD_LIST[i];
      let regex = new RegExp(creditcard.regexpFull);

      if (regex.test(number))
        return creditcard.name;
    }

    return INVALID_CARD_MESSAGE;
  }

  isValidSecurityCode(number, code) {
    let brand = this.getCreditCardNameByNumber(number);
    let numberLength;

    numberLength = (brand === 'Amex') ? 4 : 3;
    let regex = new RegExp(`[0-9]{${numberLength}}`);

    return (code.length === numberLength && regex.test(code));
  }

  isValidExpirationDate(month, year) {
    let m = month;
    let y = year;
    let yearLength = y.length;

    if (yearLength < 2 && yearLength > 4)
      return false;

    m = parseInt(m, 10);
    y = parseInt(y, 10);

    if (m < 1 || m > 12)
      return false;

    return !(y < 1000 || y >= 3000);
  }
}
