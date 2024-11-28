const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber - Sends SUM', () => {
  it('rounds both a and b', () => {
    assert.equal(6, calculateNumber('SUM', 3.8, 2.3));
    assert.equal(13, calculateNumber('SUM', 6.3, 7.1));
  });

  it('rounds only a', () => {
    assert.equal(6, calculateNumber('SUM', 3.8, 2));
    assert.equal(13, calculateNumber('SUM', 6.3, 7));
  });

  it('rounds only b', () => {
    assert.equal(5, calculateNumber('SUM', 3, 2.3));
    assert.equal(13, calculateNumber('SUM', 6, 7.1));
  });
});

describe('calculateNumber - Sends SUBTRACT', () => {
  it('rounds both a and b', () => {
    assert.equal(2, calculateNumber('SUBTRACT', 3.8, 2.3));
    assert.equal(-1, calculateNumber('SUBTRACT', 6.3, 7.1));
  });

  it('rounds only a', () => {
    assert.equal(2, calculateNumber('SUBTRACT', 3.8, 2));
    assert.equal(-1, calculateNumber('SUBTRACT', 6.3, 7));
  });

  it('rounds only b', () => {
    assert.equal(1, calculateNumber('SUBTRACT', 3, 2.3));
    assert.equal(-1, calculateNumber('SUBTRACT', 6, 7.1));
  });
});

describe('calculateNumber - Sends DIVIDE', () => {
  it('rounds both a and b', () => {
    assert.equal(2, calculateNumber('DIVIDE', 3.8, 2.3));
    assert.equal(2, calculateNumber('DIVIDE', 6.3, 3.1));
  });

  it('rounds only a', () => {
    assert.equal(2, calculateNumber('DIVIDE', 3.8, 2));
    assert.equal(2, calculateNumber('DIVIDE', 6.3, 3));
  });

  it('rounds only b', () => {
    assert.equal(3, calculateNumber('DIVIDE', 3, 1.3));
    assert.equal(2, calculateNumber('DIVIDE', 6, 3.1));
  });
});

describe('calculateNumber - Sends DIVIDE and b', () => {
  it('rounded b is zero', () => {
    assert.equal('Error', calculateNumber('DIVIDE', 3, 0.3));
  });
});
