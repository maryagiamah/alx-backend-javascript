const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('testSendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and spy on console.log', () => {
    const stub_func = sinon.stub(Utils, 'calculateNumber').returns(10);

    const spy_func = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(stub_func);
    sinon.assert.calledWithExactly(stub_func, 'SUM', 100, 20);

    sinon.assert.calledOnce(spy_func);
    sinon.assert.calledWithExactly(spy_func, 'The total is: 10');

    stub_func.restore();
    spy_func.restore();
  });
});
