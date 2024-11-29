const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('calls calculateNumber correctly', () => {
    const stub_func = sinon.stub(Utils, "calculateNumber");
    const spy_func = sinon.spy(console, 'log');
    stub_func.returns(10);

    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);

    sinon.assert.called(stub_func);
    sinon.assert.calledWith(stub_func,'SUM', 100, 20);

    sinon.assert.calledWith(spy_func, 'The total is: 10');
    sinon.assert.called(spy_func);

    spy_func.restore();
    stub_func.restore();
  });
});
