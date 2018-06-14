import CREDIT_CARD_LIST from '../src/creditCardList.js';

describe('CreditCardList', () => {
  describe('#getCreditCardList', () => {
    it('should return a array with cards', () => {
      expect(CREDIT_CARD_LIST instanceof Array).toBeTruthy();
    });
  });
});
