import CreditCard from '../src/creditCard.js';

describe('CreditCard', () => {
  beforeEach(() => {
    global.creditcard = new CreditCard();
    global.INVALID_CREDIT_CARD = '00000';
    global.CREDIT_CARDS = {
      visa: '4539578763621486',
      master: '5369835519963014',
      diners: '30346836403940',
      elo: '5041756758046020',
      amex: '373257135458763',
      aura: '5078601870000127985',
      hiper: '6062825303833679'
    };
  });

  describe('#validadeExpiryDate', () => {
    beforeEach(() => {
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2017, 6, 10));
    });

    afterEach(() => jasmine.clock().uninstall());

    it('should return true with its a VALID date', () => {
      expect(creditcard.isExpirationDateValid('10', '2020')).toBeTruthy();
    });

    it('should return true with its a INVALID year', () => {
      expect(creditcard.isExpirationDateValid('10', '200')).toBeFalsy();
    });

    it('should return true with its a INVALID month', () => {
      expect(creditcard.isExpirationDateValid('15', '2020')).toBeFalsy();
    });

    it('should return false with empty month or year', () => {
      expect(creditcard.isExpirationDateValid('', '')).toBeFalsy();
    });

    it('should return false when month is past', () => {
      expect(creditcard.isExpirationDateValid('01', '2017')).toBeFalsy();
    });
  });

  describe('#validadeCreditCard', () => {
    it('should return true with its a VALID credit card', () => {
      expect(creditcard.isValid(CREDIT_CARDS.visa)).toBeTruthy();
    });

    it('should return false with its a VALID credit card', () => {
      expect(creditcard.isValid(INVALID_CREDIT_CARD)).toBeFalsy();
    });
  });

  describe('#validadeSecurityCode', () => {
    it('should return true when its a VALID security code', () => {
      let securityCode = '100';
      expect(creditcard.isSecurityCodeValid('4112888888881881', securityCode)).toBeTruthy();
    });

    it('should return true when its a security code of Amex', () => {
      let securityCode = '5000';
      expect(creditcard.isSecurityCodeValid(CREDIT_CARDS.amex, securityCode)).toBeTruthy();
    });

    it('should return false when its a INVALID security code', () => {
      let securityCode = '10';
      expect(creditcard.isSecurityCodeValid(CREDIT_CARDS.visa, securityCode)).toBeFalsy();
    });
  });

  describe('#getCreditCardNameByNumber', () => {
    it('should return the name of Amex', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.amex);
      expect(creditCardName).toBe('Amex');
    });

    it('should return the name of Mastercard', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.master);
      expect(creditCardName).toBe('Mastercard');
    });

    it('should return the name of Visa', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.visa);
      expect(creditCardName).toBe('Visa');
    });

    it('should return the name of Diners', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.diners);
      expect(creditCardName).toBe('Diners');
    });

    it('should return the name of Elo', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.elo);
      expect(creditCardName).toBe('Elo');
    });

    it('should return the name of Aura', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.aura);
      expect(creditCardName).toBe('Aura');
    });

    it('should return the name of Hipercard', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.hiper);
      expect(creditCardName).toBe('Hipercard');
    });

    it('should return false', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(INVALID_CREDIT_CARD);
      expect(creditCardName).toBe('Credit card is invalid!');
    });
  });
});
