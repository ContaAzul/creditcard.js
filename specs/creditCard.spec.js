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
      hiper: '6062825303833679',
      visaMask: '4532000000000000',
      enRoute: '214923550339795'
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

    it('should return true with its a VALID credit card but not accept list cards', () => {
      expect(creditcard.isValid(CREDIT_CARDS.enRoute)).toBeTruthy();
    });
  });

  describe('#validadeCreditCardAndAccept', () => {
    it('should return true with its a VALID credit card', () => {
      expect(creditcard.isValidAndAccept(CREDIT_CARDS.visa)).toBeTruthy();
    });

    it('should return false with its a VALID and Accept credit card', () => {
      expect(creditcard.isValidAndAccept(CREDIT_CARDS.enRoute)).toBeFalsy();
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
      expect(creditcard.getCreditCardNameByNumber('340962711400861')).toBe('Amex');
      expect(creditcard.getCreditCardNameByNumber('346553')).toBe('Amex');
    });

    it('should return the name of Discover', () => {
      expect(creditcard.getCreditCardNameByNumber('6011458311165686')).toBe('Discover');
      expect(creditcard.getCreditCardNameByNumber('601163')).toBe('Discover');
    });

    it('should return the name of Mastercard', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.master);
      expect(creditCardName).toBe('Mastercard');
      expect(creditcard.getCreditCardNameByNumber('5269376583674915')).toBe('Mastercard');
      expect(creditcard.getCreditCardNameByNumber('529280')).toBe('Mastercard');
    });

    it('should return the name of Visa', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.visa);
      expect(creditCardName).toBe('Visa');
      expect(creditcard.getCreditCardNameByNumber('4539578763621486')).toBe('Visa');
      expect(creditcard.getCreditCardNameByNumber('453957')).toBe('Visa');
      expect(creditcard.getCreditCardNameByNumber('4539904805044')).toBe('Visa');
      expect(creditcard.getCreditCardNameByNumber('448507')).toBe('Visa');
    });

    it('should return the name of Diners', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.diners);
      expect(creditCardName).toBe('Diners');
      expect(creditcard.getCreditCardNameByNumber('30158921324836')).toBe('Diners');
      expect(creditcard.getCreditCardNameByNumber('300312')).toBe('Diners');
    });

    it('should return the name of Elo', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.elo);
      expect(creditCardName).toBe('Elo');
      expect(creditcard.getCreditCardNameByNumber('4514163016464478')).toBe('Elo');
      expect(creditcard.getCreditCardNameByNumber('4389357')).toBe('Elo');
    });

    it('should return the name of Aura', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.aura);
      expect(creditCardName).toBe('Aura');
      expect(creditcard.getCreditCardNameByNumber('5078601870000127985')).toBe('Aura');
      expect(creditcard.getCreditCardNameByNumber('507860')).toBe('Aura');
    });

    it('should return the name of Hipercard', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.hiper);
      expect(creditCardName).toBe('Hipercard');
      expect(creditcard.getCreditCardNameByNumber('6062823583463044')).toBe('Hipercard');
      expect(creditcard.getCreditCardNameByNumber('606282')).toBe('Hipercard');
    });

    it('should return valid name for mask number', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(CREDIT_CARDS.visaMask);
      expect(creditCardName).toBe('Visa');
    });

    it('should return empty', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(INVALID_CREDIT_CARD);
      expect(creditCardName).toBe('');
      expect(creditcard.getCreditCardNameByNumber()).toBe('');
      expect(creditcard.getCreditCardNameByNumber(123)).toBe('');
    });

    it('should return invalid', () => {
      let creditCardName = creditcard.getCreditCardNameByNumber(123654);
      expect(creditCardName).toBe('Credit card is invalid!');
    });

  });
});
