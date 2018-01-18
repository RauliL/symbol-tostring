# symbol-tostring [![travis][travis-image]][travis-url] [![coveralls][coveralls-image]][coveralls-url] [![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/RauliL/symbol-tostring/master.svg
[travis-url]: https://travis-ci.org/RauliL/symbol-tostring
[coveralls-image]: https://coveralls.io/repos/github/RauliL/symbol-tostring/badge.svg
[coveralls-url]: https://coveralls.io/github/RauliL/symbol-tostring
[npm-image]: https://img.shields.io/npm/v/symbol-tostring.svg
[npm-url]: https://npmjs.org/package/symbol-tostring

Utility function which converts symbols into strings.

Usage:
```JavaScript
const symbolToString = require('symbol-tostring');
const foo = Symbol('foo');

console.log(symbolToString(foo)); // Outputs "foo"
```
