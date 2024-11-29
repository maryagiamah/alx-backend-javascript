const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./4-payment.js');

describe('testSendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber is stubbed', () => {
    const stub_func = sinon.stub(Utils, "calculateNumber").returns(10);
    const spy_func = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);

    sinon.assert.called(stub_func);
    sinon.assert.alwaysCalledWith(stub_func, 'SUM', 100, 20);

    sinon.assert.called(spy_func);
    sinon.assert.alwaysCalledWith(spy_func, 'The total is: 10');

    spy_func.restore();
    stub_func.restore();
  });
});
