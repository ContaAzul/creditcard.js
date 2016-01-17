import CreditCardList from './creditCardList';

let creditcardlist = new CreditCardList();
const CREDIT_CARD_LIST = creditcardlist.getCreditCardList();

class CreditCard {
  getCreditCardNameByNumber(number) {
    for (let i = 0; i < CREDIT_CARD_LIST.length; i++) {
      let creditcard = CREDIT_CARD_LIST[i];
      let regex = new RegExp(creditcard.regexpFull);

      if (regex.test(number))
        return creditcard.name;
    }

    return false;
  }
}

export default CreditCard;
