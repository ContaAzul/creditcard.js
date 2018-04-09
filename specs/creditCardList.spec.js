import CreditCardList from '../src/creditCardList.js';

describe('CreditCardList', () => {
  beforeEach(() => {
    global.list = CreditCardList;
  });

  describe('#CreditCardList', () => {
    it('shall ensure that the', () => {
      let cards = list;
      expect(cards).toBeDefined();
    });
  });

  describe('#count', function () {
    it('should the list is filled', () => {
      expect(list.count()).toBeGreaterThanOrEqual(8);
    });
  });

  describe('#getItemByIndex', function () {
    it('must ensure that you are returning an item', () => {
      let item = list.getItemByIndex(2);
      expect(item).toBeDefined();
      expect(item.name).toEqual('Discover');
    });

    it('must guarantee that it returns null when it has no item', () => {
      expect(list.getItemByIndex(10)).toBeNull();
    });
  })
});
