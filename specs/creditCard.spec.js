import CreditCard from '../src/creditCard.js';

describe('CreditCard', () => {
  beforeEach(() => {
    global.creditcard = new CreditCard();
    global.VALID_CREDIT_CARD = '4024007194756572';
    global.INVALID_CREDIT_CARD = '00000';
  });

  describe('#validadeSecuryCode', () => {});
  describe('#validadeExpiryDate', () => {});

  describe('#validadeCreditCard', () => {
    it('should return true with its a VALID credit card', () => {
      expect(creditcard.validate(VALID_CREDIT_CARD)).toBeTruthy();
    });

    it('should return false with its a VALID credit card', () => {
      expect(creditcard.validate(INVALID_CREDIT_CARD)).toBeFalsy();
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
