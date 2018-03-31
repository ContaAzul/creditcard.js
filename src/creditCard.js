import CreditCardList from './creditCardList';
import Luhn from './helpers/luhn';

class CreditCard {
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

    let CREDIT_CARD_LIST = this.retrieveCreditCardList();

    for (let i = 0; i < CREDIT_CARD_LIST.length; i++) {
      let creditcard = CREDIT_CARD_LIST[i];
      let regex = new RegExp(creditcard.regexpFull);

      if (regex.test(number))
        return creditcard.name;
    }

    return INVALID_CARD_MESSAGE;
  }

  isSecurityCodeValid(number, code) {
    let brand = this.getCreditCardNameByNumber(number);
    let numberLength;

    numberLength = (brand === 'Amex') ? 4 : 3;
    let regex = new RegExp(`^[0-9]{${numberLength}}$`);

    return regex.test(code);
  }

  isExpirationDateValid(paramMonth, paramYearn) {
    const month = parseInt(paramMonth, 10);
    const year = parseInt(paramYearn, 10);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    if (isNaN(month) || isNaN(year))
      return false;

    if (year === currentYear && month < currentMonth)
      return false;

    if (month < 1 || month > 12)
      return false;

    return !(year < 1000 || year >= 3000);
  }
}

export default CreditCard;
