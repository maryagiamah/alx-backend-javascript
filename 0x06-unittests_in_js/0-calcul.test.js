const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('adds a and b', () => {
    assert.equal(6, calculateNumber(3.8, 2.3));
  });
});
