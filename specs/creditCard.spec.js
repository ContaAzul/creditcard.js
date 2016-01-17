import CreditCard from '../src/creditCard.js';

describe('CreditCard', () => {
  beforeEach(() => {
    global.creditcard = new CreditCard();
  });

  describe('#validadeCreditCard', () => {});
  describe('#validadeSecuryCode', () => {});
  describe('#validadeExpiryDate', () => {});

  describe('#getCreditCardNameByNumber', () => {
    it('should return the name of Credit Card', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber('4024007194756572');
      expect(creditCardName).toBe('Visa');
    });

    it('should return false', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber('9129310293012931');
      expect(creditCardName).toBeFalsy();
    });
  });
});
