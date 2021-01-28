const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');


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
  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      res.redirect('/treasure');
      console.log(`✅ Success`);
    } else {
      console.log(`⭐ Already created`);
      res.redirect('/auth/signup');
    }
  }).catch( error => {
    console.log(`❌ Error: `, error);
    res.redirect('/auth/signup');
  });
});


module.exports = router;
