module.exports = function symbolToString(symbol) {
  if (typeof symbol !== 'symbol') {
    throw new TypeError(typeof symbol + ' is not a symbol');
  }

  return String(symbol).replace(/^Symbol\((.*)\)$/, '$1');
}
