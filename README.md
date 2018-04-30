# creditcard.js

[![Build Status](https://api.travis-ci.org/ContaAzul/creditcard.js.svg?branch=master)](https://travis-ci.org/ContaAzul/creditcard.js)
[![Dependency Status](https://david-dm.org/ContaAzul/creditcard.js.svg)](https://david-dm.org/Semantic-Org/ContaAzul/creditcard.js)
[![devDependency Status](https://david-dm.org/ContaAzul/creditcard.js/dev-status.svg)](https://david-dm.org/ContaAzul/creditcard.js#info=devDependencies)

> A simple credit cards validation library in JavaScript.

## Install

You can [download the zip file](https://github.com/contaazul/creditcard.js/archive/master.zip) or use NPM or Yarn.

### NPM

```sh
$ npm install --save creditcard.js
```

### Yarn

```sh
$ yarn add creditcard.js
```

## Usage

In the browser:

```html
<script type="text/javascript" src="dist/creditcard.min.js"></script>
```

```javascript
var obj = new CreditCard();
obj.isValid('4916108926268679'); // returns true
obj.isExpirationDateValid('02', '2020'); // returns true
obj.isSecurityCodeValid('4556603578296676', '250'); // returns true
obj.getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'
```

In the server:

```javascript
var creditcard = require('creditcard.js');
var obj = new creditcard();
obj.isValid('4916108926268679'); // returns true
obj.isExpirationDateValid('02', '2020'); // returns true
obj.isSecurityCodeValid('4556603578296676', '250'); // returns true
obj.getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'
```


### Functions


| Name | Returns |
|---|---|
|`CreditCard#isValid(cardNumber)`| `Boolean `|
|`CreditCard#isExpirationDateValid(month, year)`| `Boolean `|
|`CreditCard#isSecurityCodeValid(cardNumber, securityCode)`| `Boolean `|
|`CreditCard#getCreditCardNameByNumber(cardNumber)`| `String `|

## Browser support

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 8+ ✔ |

## License

MIT © ContaAzul
