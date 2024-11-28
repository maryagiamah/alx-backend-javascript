const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds both a and b', () => {
    assert.equal(6, calculateNumber(3.8, 2.3));
    assert.equal(13, calculateNumber(6.3, 7.1));
  });

  it('rounds only a', () => {
    assert.equal(6, calculateNumber(3.8, 2));
    assert.equal(13, calculateNumber(6.3, 7));
  });

  it('rounds only b', () => {
    assert.equal(5, calculateNumber(3, 2.3));
    assert.equal(13, calculateNumber(6, 7.1));
  });
});
