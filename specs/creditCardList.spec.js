import CreditCardList from '../src/creditCardList.js';

describe('CreditCardList', () => {
  beforeEach(() => {
    global.list = new CreditCardList();
  });

  describe('#getCreditCardList', () => {
    it('should return a array with cards', () => {
      let cards = list.getCreditCardList();
      expect(cards instanceof Array).toBeTruthy();
    });
  });
});
