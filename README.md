# credicard.js

> A simple library for validation of credit cards.

## Install

You can [download the minified file](link) or use NPM and Bower.

### NPM

```
npm install --save-dev creditcard.js
```

### Bower

```
bower install creditcard.js --save
```

For CDN use, check [this link](link).

## Usage

```javascript
var obj = new CreditCard();
obj.getCreditCardNameByNumber('4539578763621486'); // return 'Visa'
```

### Methods

#### obj`.validadeExpiryDate()`

Returns whether the value is `true` or `false`.

#### obj`.validadeCreditCard()`

Returns whether the value is `true` or `false`.

#### obj`.validadeSecuryCode()`

Returns whether the value is `true` or `false`.

#### obj`.getCreditCardNameByNumber()`

Returns a `String` with the credit card name.

## Support

// todo

## Development

// todo

## License

MIT
