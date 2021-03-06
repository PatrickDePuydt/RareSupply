const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');

// mounted at /auth

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// Sign up POST route
router.post('/signup', (req, res) => {

  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      email: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    
    if (created) {
      console.log(`😎 ${user.email} was created!`);
      
      passport.authenticate('local', {
        successRedirect: '/treasure',
        successFlash: 'Successful account creation'
      })(req, res);
      
    } else { 
      console.log(`⛔️ ${user.email} already exists!`);
      req.flash('error', 'Email already exists')
      res.redirect('/auth/signup');
    }
  }).catch(err => {
    console.log(`🐻 Bad news bears, there's an error!`);
    console.log(err);
    req.flash('error', err.message);
    res.redirect('/auth/signup');
  })
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

// make passport do the login stuff
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login',
  successRedirect: '/treasure',
  failureFlash: 'Invalid login credentials',
  successFlash: 'Successfully Logged In'
}));

// logout route
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Thanks see ya soon!')
  res.redirect('/');
});

module.exports = router;
