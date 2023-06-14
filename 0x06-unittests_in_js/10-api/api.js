const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/available_payments', (req, res) => {
  const ob = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.json(ob);
});

app.post('/login', (req, res) => {
  res.end(`Welcome ${req.body.userName}`);
});

module.exports = app;