const assert = require('assert');
const symbolToString = require('./index');

describe('symbol to string conversion utility', () => {
  it('should convert symbols to string', () => {
    ['foo', 'bar', 'baz', '@£$981', 'Symbol()'].forEach(input => {
      assert.strictEqual(symbolToString(Symbol(input)), input);
    });
  });

  it('should not accept anything else than symbols', () => {
    [1, new Error(), {}, []].forEach(input => {
      assert.throws(() => {
        symbolToString(input);
      });
    });
  });
});
