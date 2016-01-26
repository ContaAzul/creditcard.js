/*!
 * creditcard.js v1.0.0
 * Created by @ContaAzul.
 *
 * Licensed MIT.
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CreditCard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

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

  CreditCard.prototype.getCreditCardList = function getCreditCardList() {
    return this.creditcardlist.getCreditCardList();
  };

  CreditCard.prototype.validate = function validate(number) {
    return this.luhn.validate(number);
  };

  CreditCard.prototype.getCreditCardNameByNumber = function getCreditCardNameByNumber(number) {
    if (!this.validate(number)) return false;

    var CREDIT_CARD_LIST = this.getCreditCardList();

    for (var i = 0; i < CREDIT_CARD_LIST.length; i++) {
      var creditcard = CREDIT_CARD_LIST[i];
      var regex = new RegExp(creditcard.regexpFull);

      if (regex.test(number)) return creditcard.name;
    }

    return false;
  };

  CreditCard.prototype.validadeSecuryCode = function validadeSecuryCode(number, code) {
    var brand = this.getCreditCardNameByNumber(number);
    var numberLength = undefined;

    numberLength = brand === 'Amex' ? 4 : 3;
    var regex = new RegExp('[0-9]{' + numberLength + '}');

    if (code.length === numberLength && regex.test(code)) return true;

    return false;
  };

  CreditCard.prototype.validadeExpiryDate = function validadeExpiryDate(month, year) {
    var m = month;
    var y = year;
    var yearLength = y.length;

    if (yearLength < 2 && yearLength > 4) return false;

    m = parseInt(m, 10);
    y = parseInt(y, 10);

    if (m < 1 || m > 12) return false;

    if (y < 1000 || y >= 3000) return false;

    return true;
  };

  return CreditCard;
})();

exports['default'] = CreditCard;
module.exports = exports['default'];

},{"./creditCardList":2,"./helpers/luhn":3}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CREDIT_CARD_LIST = [{
  name: 'Elo',
  regexpFull: '^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636369|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}'
}, {
  name: 'Diners',
  regexpFull: '^3(?:0[0-5]|[68][0-9])[0-9]{11}$'
}, {
  name: 'Discover',
  regexpFull: '^6(?:011|5[0-9]{2})[0-9]{12}$'
}, {
  name: 'Hipercard',
  regexpFull: '^(38[0-9]{17}|60[0-9]{14})$'
}, {
  name: 'Amex',
  regexpFull: '^3[47][0-9]{13}$'
}, {
  name: 'Aura',
  regexpFull: '^50[0-9]{14,17}$'
}, {
  name: 'Mastercard',
  regexpFull: '^5[1-5][0-9]{14}$'
}, {
  name: 'Visa',
  regexpFull: '^4[0-9]{12}(?:[0-9]{3})?$'
}];

var CreditCardList = (function () {
  function CreditCardList() {
    _classCallCheck(this, CreditCardList);

    this.list = CREDIT_CARD_LIST;
  }

  CreditCardList.prototype.getCreditCardList = function getCreditCardList() {
    return this.list;
  };

  return CreditCardList;
})();

exports['default'] = CreditCardList;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Luhn = (function () {
  function Luhn() {
    _classCallCheck(this, Luhn);

    this.computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  }

  Luhn.prototype._sum = function _sum(number) {
    var sum = 0;
    var digit = 0;
    var i = number.length;
    var even = true;

    while (i--) {
      digit = Number(number[i]);
      sum += (even = !even) ? this.computed[digit] : digit;
    }

    return sum;
  };

  Luhn.prototype.validate = function validate(number) {
    var regex = new RegExp('/[^0-9-\s]+/');
    var digits = number;

    if (regex.test(digits)) return false;

    digits = digits.replace(/\D/g, '');

    var sum = this._sum(digits);
    return sum > 0 && sum % 10 === 0;
  };

  return Luhn;
})();

exports['default'] = Luhn;
module.exports = exports['default'];

},{}]},{},[1])(1)
});