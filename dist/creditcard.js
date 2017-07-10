/*!
 * creditcard.js v2.1.0
 * Created by @ContaAzul.
 *
 * Licensed MIT.
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CreditCard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreditCardList = require('./creditCardList');
var Luhn = require('./helpers/luhn');

var CreditCard = function () {
  function CreditCard() {
    _classCallCheck(this, CreditCard);

    this.creditcardlist = new CreditCardList();
    this.luhn = new Luhn();
  }

  _createClass(CreditCard, [{
    key: 'retrieveCreditCardList',
    value: function retrieveCreditCardList() {
      return this.creditcardlist.retrieveCreditCardList();
    }
  }, {
    key: 'isValid',
    value: function isValid(number) {
      return this.luhn.isValid(number);
    }
  }, {
    key: 'getCreditCardNameByNumber',
    value: function getCreditCardNameByNumber(number) {
      var INVALID_CARD_MESSAGE = 'Credit card is invalid!';
      if (!this.isValid(number)) return INVALID_CARD_MESSAGE;

      var CREDIT_CARD_LIST = this.retrieveCreditCardList();

      for (var i = 0; i < CREDIT_CARD_LIST.length; i++) {
        var creditcard = CREDIT_CARD_LIST[i];
        var regex = new RegExp(creditcard.regexpFull);

        if (regex.test(number)) return creditcard.name;
      }

      return INVALID_CARD_MESSAGE;
    }
  }, {
    key: 'isSecurityCodeValid',
    value: function isSecurityCodeValid(number, code) {
      var brand = this.getCreditCardNameByNumber(number);
      var numberLength = void 0;

      numberLength = brand === 'Amex' ? 4 : 3;
      var regex = new RegExp('^[0-9]{' + numberLength + '}$');

      return regex.test(code);
    }
  }, {
    key: 'isExpirationDateValid',
    value: function isExpirationDateValid(paramMonth, paramYearn) {
      var month = parseInt(paramMonth, 10);
      var year = parseInt(paramYearn, 10);

      var currentYear = new Date().getFullYear();
      var currentMonth = new Date().getMonth() + 1;

      if (isNaN(month) || isNaN(year)) return false;

      if (year === currentYear && month < currentMonth) return false;

      if (month < 1 || month > 12) return false;

      return !(year < 1000 || year >= 3000);
    }
  }]);

  return CreditCard;
}();

module.exports = CreditCard;

},{"./creditCardList":2,"./helpers/luhn":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CREDIT_CARD_LIST = [{
  name: 'Elo',
  regexpFull: '^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}'
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
  regexpFull: '^(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$'
}, {
  name: 'Visa',
  regexpFull: '^4[0-9]{12}(?:[0-9]{3})?$'
}];

var CreditCardList = function () {
  function CreditCardList() {
    _classCallCheck(this, CreditCardList);

    this.list = CREDIT_CARD_LIST;
  }

  _createClass(CreditCardList, [{
    key: 'retrieveCreditCardList',
    value: function retrieveCreditCardList() {
      return this.list;
    }
  }]);

  return CreditCardList;
}();

module.exports = CreditCardList;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Luhn = function () {
  function Luhn() {
    _classCallCheck(this, Luhn);

    this.computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  }

  _createClass(Luhn, [{
    key: '_sum',
    value: function _sum(number) {
      var sum = 0;
      var digit = 0;
      var i = number.length;
      var even = true;

      while (i--) {
        digit = Number(number[i]);
        sum += (even = !even) ? this.computed[digit] : digit;
      }

      return sum;
    }
  }, {
    key: 'isValid',
    value: function isValid(number) {
      var regex = new RegExp('/[^0-9-\s]+/');
      var digits = number;

      if (regex.test(digits)) return false;

      digits = digits.replace(/\D/g, '');

      var sum = this._sum(digits);
      return sum > 0 && sum % 10 === 0;
    }
  }]);

  return Luhn;
}();

module.exports = Luhn;

},{}]},{},[1])(1)
});