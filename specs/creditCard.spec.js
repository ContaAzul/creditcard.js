import CreditCard from '../src/creditCard.js';

describe('CreditCard', () => {
  beforeEach(() => {
    global.creditcard = new CreditCard();
    global.VALID_CREDIT_CARD = '4024007194756572';
    global.INVALID_CREDIT_CARD = '00000';
  });
  describe('#validadeExpiryDate', () => {});

  describe('#validadeCreditCard', () => {
    it('should return true with its a VALID credit card', () => {
      expect(creditcard.validate(VALID_CREDIT_CARD)).toBeTruthy();
    });

    it('should return false with its a VALID credit card', () => {
      expect(creditcard.validate(INVALID_CREDIT_CARD)).toBeFalsy();
    });
  });

  describe('#validadeSecuryCode', () => {
    it('should return true when its a VALID security code', () => {
      let securityCode = '100';
      expect(creditcard.validadeSecuryCode(VALID_CREDIT_CARD, securityCode)).toBeTruthy();
    });

    it('should return true when its a security code of Amex', () => {
      let securityCode = '5000';
      expect(creditcard.validadeSecuryCode('378734493671000', securityCode)).toBeTruthy();
    });

    it('should return false when its a INVALID security code', () => {
      let securityCode = '10';
      expect(creditcard.validadeSecuryCode(VALID_CREDIT_CARD, securityCode)).toBeFalsy();
    });
  });

  describe('#getCreditCardNameByNumber', () => {
    it('should return the name of Credit Card', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(VALID_CREDIT_CARD);
      expect(creditCardName).toBe('Visa');
    });

    it('should return false', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(INVALID_CREDIT_CARD);
      expect(creditCardName).toBeFalsy();
    });
  });
});
