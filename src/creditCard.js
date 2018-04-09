const CreditCardList = require('./creditCardList');
const Luhn = require('./helpers/luhn');

class CreditCard {
  constructor() {
    this.luhn = new Luhn();
  }

  _getNameCard(number, partial){
    const INVALID_CARD_MESSAGE = 'Credit card is invalid!';
    const TOTAL_LIST_CARDS = CreditCardList.count();
    const TYPE_REGEX = partial ? 'regexPartial' : 'regexpFull';

    for (let i = 0; i < TOTAL_LIST_CARDS; i++) {
      let creditcard = CreditCardList.getItemByIndex(i);
      let regex = new RegExp(creditcard[TYPE_REGEX]);

      if (regex.test(number)) {
        return creditcard.name;
      }
    }

    return INVALID_CARD_MESSAGE;
  }

  checkValue(value) {
    if (typeof value === 'number') {
      return value.toString();
    } else if (typeof value === 'string') {
      return value.replace(/\D/, '');
    } else {
      return '';
    }
  }

  getCreditCardNameByNumber(number) {
    let _number = null;
    _number = this.checkValue(number);
    if (!_number.length || _number.length < 6) {
      return '';
    }
    return this._getNameCard(_number, true);
  }

  isValidAndAccept(number){
    let _number = this.checkValue(number);
    let _name = this._getNameCard(_number);
    return this.luhn.isValid(_number) && _name.indexOf('invalid') < 0;
  }

  isValid(number) {
    let _number = this.checkValue(number);
    return this.luhn.isValid(_number);
  }

  isSecurityCodeValid(number, code) {
    let brand = null;
    let numberLength = null;
    let _code = null;
    let _number = null;

    _code = this.checkValue(code);
    _number = this.checkValue(number);

    brand = this.getCreditCardNameByNumber(_number);
    numberLength = (brand === 'Amex') ? 4 : 3;
    let regex = new RegExp(`^[0-9]{${numberLength}}$`);

    return regex.test(_code);
  }

  isExpirationDateValid(paramMonth, paramYearn) {
    const date = new Date();
    const month = parseInt(paramMonth, 10);
    const year = parseInt(paramYearn, 10);
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const yearLimit = currentYear + 8;

    if (isNaN(month) || isNaN(year)){
      return false;
    }

    if (year === currentYear && month < currentMonth){
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }

    return !(year < currentYear || year > yearLimit);
  }
}

module.exports = CreditCard;
