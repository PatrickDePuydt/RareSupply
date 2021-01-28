// Requirements
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    db.user.findByPk(id).then(user => {
        cb(null, user);
    }).catch(err => {
        cb(err, null)
    });
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {
    db.user.findOne({
        where: { 
          email 
        }
    }).then(user => {
        if (user && user.validPassword(password)) {
            console.log(`👑 User with email ${user.email} is valid`);
            cb(null, user);
        } else {
            console.log('👿 user', user, '/👿');
            cb(null, false);
        }
    }).catch(cb);
}));

module.exports = passport;