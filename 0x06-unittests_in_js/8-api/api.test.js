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
});
