import CreditCardList from './creditCardList';
import Luhn from './helpers/luhn';

export default class CreditCard {
  constructor() {
    this.creditcardlist = new CreditCardList();
    this.luhn = new Luhn();
  }

  getCreditCardList() {
    return this.creditcardlist.getCreditCardList();
  }

  validate(number) {
    return this.luhn.validate(number);
  }

  getCreditCardNameByNumber(number) {
    if (!this.validate(number))
      return false;

    let CREDIT_CARD_LIST = this.getCreditCardList();

    for (let i = 0; i < CREDIT_CARD_LIST.length; i++) {
      let creditcard = CREDIT_CARD_LIST[i];
      let regex = new RegExp(creditcard.regexpFull);

      if (regex.test(number))
        return creditcard.name;
    }

    return false;
  }
}
