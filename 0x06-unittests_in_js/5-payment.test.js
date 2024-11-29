const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./5-payment.js');

describe('addedHooks', () => {
  let spy_func;

  beforeEach(() => {
    spy_func = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy_func.restore();
  });

  it('sendPaymentRequestToAPI(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy_func);
    sinon.assert.calledWithMatch(spy_func, 'The total is: 120');
  });

  it('sendPaymentRequestToAPI(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(spy_func);
    sinon.assert.calledWithMatch(spy_func, 'The total is: 20');
  });
});
