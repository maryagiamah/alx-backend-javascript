const sinon = require('sinon');
const { assert, expect } = require('chai');
const Utils = require("./utils");
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('testgetPaymentTokenFromAPI', () => {
  it('testAsyncFuncWithdone', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.have.own.property('data');
      assert.equal(res.data, 'Successful response from the API');
      done();
    });
  });
});
