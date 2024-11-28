const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - Sends SUM', () => {
  it('rounds both a and b', () => {
    expect(6).to.equal(calculateNumber('SUM', 3.8, 2.3));
    expect(13).to.equal(calculateNumber('SUM', 6.3, 7.1));
  });

  it('rounds only a', () => {
    expect(6).to.equal(calculateNumber('SUM', 3.8, 2));
    expect(13).to.equal(calculateNumber('SUM', 6.3, 7));
  });

  it('rounds only b', () => {
    expect(5).to.equal(calculateNumber('SUM', 3, 2.3));
    expect(13).to.equal(calculateNumber('SUM', 6, 7.1));
  });
});

describe('calculateNumber - Sends SUBTRACT', () => {
  it('rounds both a and b', () => {
    expect(2).to.equal(calculateNumber('SUBTRACT', 3.8, 2.3));
    expect(-1).to.equal(calculateNumber('SUBTRACT', 6.3, 7.1));
  });

  it('rounds only a', () => {
    expect(2).to.equal(calculateNumber('SUBTRACT', 3.8, 2));
    expect(-1).to.equal(calculateNumber('SUBTRACT', 6.3, 7));
  });

  it('rounds only b', () => {
    expect(1).to.equal(calculateNumber('SUBTRACT', 3, 2.3));
    expect(-1).to.equal(calculateNumber('SUBTRACT', 6, 7.1));
  });
});

describe('calculateNumber - Sends DIVIDE', () => {
  it('rounds both a and b', () => {
    expect(2).to.equal(calculateNumber('DIVIDE', 3.8, 2.3));
    expect(2).to.equal(calculateNumber('DIVIDE', 6.3, 3.1));
  });

  it('rounds only a', () => {
    expect(2).to.equal(calculateNumber('DIVIDE', 3.8, 2));
    expect(2).to.equal(calculateNumber('DIVIDE', 6.3, 3));
  });

  it('rounds only b', () => {
    expect(3).to.equal(calculateNumber('DIVIDE', 3, 1.3));
    expect(2).to.equal(calculateNumber('DIVIDE', 6, 3.1));
  });
});

describe('calculateNumber - Sends DIVIDE and b', () => {
  it('rounded b is zero', () => {
    expect('Error').to.equal(calculateNumber('DIVIDE', 3, 0.3));
  });
});
