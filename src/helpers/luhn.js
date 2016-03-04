class Luhn {
  constructor() {
    this.computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  }

  _sum(number) {
    let sum = 0;
    let digit = 0;
    let i = number.length;
    let even = true;

    while (i--) {
      digit = Number(number[i]);
      sum += (even = !even) ? this.computed[digit] : digit;
    }

    return sum;
  }

  isValid(number) {
    let regex = new RegExp('/[^0-9-\s]+/');
    let digits = number;

    if (regex.test(digits))
      return false;

    digits = digits.replace(/\D/g, '');

    let sum = this._sum(digits);
    return sum > 0 && sum % 10 === 0;
  }
}

module.exports = Luhn;
