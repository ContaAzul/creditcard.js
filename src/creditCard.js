import CreditCardList from './creditCardList';

export default class CreditCard {
  constructor() {
    this.creditcardlist = new CreditCardList();
  }

  getCreditCardList() {
    return this.creditcardlist.getCreditCardList();
  }

  getCreditCardNameByNumber(number) {
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
