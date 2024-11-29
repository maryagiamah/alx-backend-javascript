const assert = require('assert');
const axios = require('axios');

describe('testApp', () => {
  it('testAppIndexPage', (done) => {
    axios.get('http://localhost:7865').then((res) => {
      assert.equal(res.status, 200);

      assert.equal(res.data, 'Welcome to the payment system');

      assert.equal(res.headers['content-length'], 29);
      done();
    });
  });

  it('testCart:IdPage', (done) => {
    axios.get('http://localhost:7865/cart/15').then((res) => {
      assert.equal(res.status, 200);
      assert.equal(res.data, 'Payment methods for cart 15');
      done();
    });
  });

   it('testCart:IdPage404', (done) => {
    axios.get('http://localhost:7865/cart/err_404').catch((error) => {
      assert.equal(error.response.status, 404);
      done();
    });
   });

  it('testAvaialablePayments', (done) => {
    axios.get('http://localhost:7865/available_payments').then((res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.data, {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('testPOSTlogin', (done) => {
    axios.post('http://localhost:7865/login', {"userName": "Uyoyo"}).then((res) => {
      assert.equal(res.status, 200); 
      assert.equal(res.data, 'Welcome Uyoyo');
      done();
    });
  });
});
