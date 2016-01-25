'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _creditCardList = require('./creditCardList');

var _creditCardList2 = _interopRequireDefault(_creditCardList);

var _helpersLuhn = require('./helpers/luhn');

var _helpersLuhn2 = _interopRequireDefault(_helpersLuhn);

var CreditCard = (function () {
  function CreditCard() {
    _classCallCheck(this, CreditCard);

    this.creditcardlist = new _creditCardList2['default']();
    this.luhn = new _helpersLuhn2['default']();
  }

  _createClass(CreditCard, [{
    key: 'getCreditCardList',
    value: function getCreditCardList() {
      return this.creditcardlist.getCreditCardList();
    }
  }, {
    key: 'validate',
    value: function validate(number) {
      return this.luhn.validate(number);
    }
  }, {
    key: 'getCreditCardNameByNumber',
    value: function getCreditCardNameByNumber(number) {
      if (!this.validate(number)) return false;

      var CREDIT_CARD_LIST = this.getCreditCardList();

      for (var i = 0; i < CREDIT_CARD_LIST.length; i++) {
        var creditcard = CREDIT_CARD_LIST[i];
        var regex = new RegExp(creditcard.regexpFull);

        if (regex.test(number)) return creditcard.name;
      }

      return false;
    }
  }, {
    key: 'validadeSecuryCode',
    value: function validadeSecuryCode(number, code) {
      var brand = this.getCreditCardNameByNumber(number);
      var numberLength = undefined;

      numberLength = brand === 'Amex' ? 4 : 3;
      var regex = new RegExp('[0-9]{' + numberLength + '}');

      if (code.length === numberLength && regex.test(code)) return true;

      return false;
    }
  }, {
    key: 'validadeExpiryDate',
    value: function validadeExpiryDate(month, year) {
      var m = month;
      var y = year;
      var yearLength = y.length;

      if (yearLength < 2 && yearLength > 4) return false;

      m = parseInt(m, 10);
      y = parseInt(y, 10);

      if (m < 1 || m > 12) return false;

      if (y < 1000 || y >= 3000) return false;

      return true;
    }
  }]);

  return CreditCard;
})();

exports['default'] = CreditCard;
module.exports = exports['default'];
//# sourceMappingURL=creditCard.js.map