const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber is stubbed', () => {
    const stub_func = sinon.stub(Utils, "calculateNumber").returns(10);
    const spy_func = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(stub_func);
    sinon.assert.calledWith(stub_func, 'SUM', 100, 20);

    sinon.assert.calledOnce(spy_func);
    sinon.assert.calledWith(spy_func, 'The total is: 10');

    spy_func.restore();
    stub_func.restore();
  });
});
