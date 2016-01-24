'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Luhn = (function () {
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
    key: 'validate',
    value: function validate(number) {
      var regex = new RegExp('/[^0-9-\s]+/');
      var digits = number;

      if (regex.test(digits)) return false;

      digits = digits.replace(/\D/g, '');

      var sum = this._sum(digits);
      return sum > 0 && sum % 10 === 0;
    }
  }]);

  return Luhn;
})();

exports['default'] = Luhn;
module.exports = exports['default'];
//# sourceMappingURL=luhn.js.map