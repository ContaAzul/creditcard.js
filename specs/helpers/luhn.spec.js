import Luhn from '../../src/helpers/luhn.js';

describe('Luhn', () => {
  beforeEach(() => {
    global.luhn = new Luhn();
  });

  describe('#validate', () => {
    it('should return true when its a VALID credit card number', () => {
      expect(luhn.validate('4012888888881881')).toBeTruthy();
    });

    it('should return true when its a VALID credit card number with spaces', () => {
      expect(luhn.validate('40128 88888 88188 1')).toBeTruthy();
    });

    it('should return true when its a VALID credit card number with dashes', () => {
      expect(luhn.validate('40128-88888-88188-1')).toBeTruthy();
    });

    it('should return false when its a INVALID credit card number', () => {
      expect(luhn.validate('0000000')).toBeFalsy();
    });

    it('should return false when its contains something other than digits, dashes or spaces', () => {
      expect(luhn.validate('foobar')).toBeFalsy();
    });
  });
});
