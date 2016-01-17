import CreditCard from '../src/creditCard.js';

describe('CreditCard', () => {
  beforeEach(() => {
    global.creditcard = new CreditCard();
  });

  describe('#getCreditCardByNumber', () => {
    it('should return the name of Credit Card', () => {
      let creditCardName = creditcard.getCreditCardByNumber('4024007194756572');
      expect(creditCardName).toBe('Visa');
    });

    it('should return false', () => {
      let creditCardName = creditcard.getCreditCardByNumber('9129310293012931');
      expect(creditCardName).toBeFalsy();
    });
  });
});
