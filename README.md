# creditcard.js

[![Build Status](https://github.com/ContaAzul/creditcard.js/workflows/Build%20Check/badge.svg)](https://github.com/ContaAzul/creditcard.js/actions?query=workflow%3A%22Build+Check%22)
[![Dependency Status](https://david-dm.org/ContaAzul/creditcard.js.svg)](https://david-dm.org/Semantic-Org/ContaAzul/creditcard.js)
[![devDependency Status](https://david-dm.org/ContaAzul/creditcard.js/dev-status.svg)](https://david-dm.org/ContaAzul/creditcard.js#info=devDependencies)

> A simple credit cards validation library in JavaScript.

## Install

creditcard.js is available as a NPM package. You can install through Yarn or NPM:

### Yarn

```sh
$ yarn add creditcard.js
```

### NPM

```sh
$ npm install creditcard.js
```

## Usage

```javascript
import { 
  isValid, 
  isExpirationDateValid, 
  isSecurityCodeValid, 
  getCreditCardNameByNumber 
} from 'creditcard.js';

isValid('4916108926268679'); // returns true
isExpirationDateValid('02', '2020'); // returns true
isSecurityCodeValid('4556603578296676', '250'); // returns true
getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'
```

## Methods

### `isValid(number)` -> `boolean`

Checks whether the credit card number format is valid. _(See the full list of [currently supported cards](#suportted-credit-card-types))_

**number**

_Required_\
Type: `string`

-----
### `isExpirationDateValid(month, year)` -> `boolean`

Checks that the expiration date is valid and not expired. _(2 or 4 digit years are accepted)_

**month**

_Required_\
Type: `string`

**year**

_Required_\
Type: `string`

-----

### `isSecurityCodeValid(creditCardNumber, securityCode)` -> `boolean`

Check that the security code is valid according to the type of credit card.

**creditCardNumber**

_Required_\
Type: `string`

**securityCode**

_Required_\
Type: `string`

-----

### `getCreditCardNameByNumber(number)` -> `string`

Returns the credit card type from the card number. _(See the full list of [currently supported cards](#suportted-credit-card-types))_

**number**

_Required_\
Type: `string`

-----

## Suportted credit card types

- American Express
- Aura
- Banescard
- Cabal
- Diners
- Discover
- Elo
- Goodcard
- Hipercard
- Mastercard
- Maxxvan
- Visa

## Browser support

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 8+ ✔ |

## License

MIT © Conta Azul
