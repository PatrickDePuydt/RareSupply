const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  console.log(`🥝🥝🥝🥝🥝`)
  res.send(req.body);
});


router.post('/login', function(req, res) {
  res.render('auth/login');
});

module.exports = router;
