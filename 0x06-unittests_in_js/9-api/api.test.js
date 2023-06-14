const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API with status, body', (done) => {
    request('http://localhost:7865', 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  });

  it('test the API with cart/3', (done) => {
    request('http://localhost:7865/cart/3', 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 3');
    });
    done();
  });

  it('test the API with cart/234', (done) => {
    request('http://localhost:7865/cart/234', 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 234');
    });
    done();
  });

  it('test the API with cart/abc', (done) => {
    request('http://localhost:7865/cart/abc', 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart/2bc', (done) => {
    request('http://localhost:7865/cart/2bc', 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart/23a', (done) => {
    request('http://localhost:7865/cart/23a', 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart', (done) => {
    request('http://localhost:7865/cart', 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });
});