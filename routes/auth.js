const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  console.log(`🥝🥝🥝🥝🥝`)
  res.send(req.body);
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  console.log(`🍔🍔🍔🍔🍔`)
  res.send(req.body);
});


module.exports = router;
