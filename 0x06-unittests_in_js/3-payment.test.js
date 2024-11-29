const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('calls calculateNumber correctly', () => {
    const spy_func = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spy_func,'SUM', 100, 20);
    sinon.assert.calledOnce(spy_func);

    spy_func.restore();
  });
});
