(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _creditCardList = require('./creditCardList');

var _creditCardList2 = _interopRequireDefault(_creditCardList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var creditcardlist = new _creditCardList2.default();
var CREDIT_CARD_LIST = creditcardlist.getCreditCardList();

var CreditCard = function () {
  function CreditCard() {
    _classCallCheck(this, CreditCard);
  }

  _createClass(CreditCard, [{
    key: 'getCreditCardByNumber',
    value: function getCreditCardByNumber(number) {
      for (var i = 0; i < CREDIT_CARD_LIST.length; i++) {
        var creditcard = CREDIT_CARD_LIST[i];
        var regex = new RegExp(creditcard.regexpFull);

        if (regex.test(number)) return creditcard.name;
      }

      return false;
    }
  }]);

  return CreditCard;
}();

exports.default = CreditCard;

},{"./creditCardList":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CREDIT_CARD_LIST = [{
  name: 'elo',
  regexpBin: '^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])',
  regexpFull: '^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636369|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}',
  regexpCvv: '^\d{3}$'
}, {
  name: 'diners',
  regexpBin: '^3(?:0[0-5]|[68][0-9])',
  regexpFull: '^3(?:0[0-5]|[68][0-9])[0-9]{11}$',
  regexpCvv: '^\d{3}$'
}, {
  name: 'discover',
  regexpBin: '^6(?:011|5[0-9]{2})',
  regexpFull: '^6(?:011|5[0-9]{2})[0-9]{12}$',
  regexpCvv: '^\d{3}$'
}, {
  name: 'hipercard',
  regexpBin: '^3841[046]0|^60',
  regexpFull: '^(38[0-9]{17}|60[0-9]{14})$',
  regexpCvv: '^\d{3}$'
}, {
  name: 'amex',
  regexpBin: '^3[47]',
  regexpFull: '^3[47][0-9]{13}$',
  regexpCvv: '^\d{3,4}$'
}, {
  name: 'aura',
  regexpBin: '^50[0-9]',
  regexpFull: '^50[0-9]{14,17}$',
  regexpCvv: '^\d{3}$'
}, {
  name: 'mastercard',
  regexpBin: '^5[1-5][0-9][0-9]',
  regexpFull: '^5[1-5][0-9]{14}$',
  regexpCvv: '^\d{3}$'
}, {
  name: 'visa',
  regexpBin: '^4',
  regexpFull: '^4[0-9]{12}(?:[0-9]{3})?$',
  regexpCvv: '^\d{3}$'
}];

var CreditCardList = function () {
  function CreditCardList() {
    _classCallCheck(this, CreditCardList);
  }

  _createClass(CreditCardList, [{
    key: 'getCreditCardList',
    value: function getCreditCardList() {
      return CREDIT_CARD_LIST;
    }
  }]);

  return CreditCardList;
}();

exports.default = CreditCardList;

},{}]},{},[1]);
