require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const path = require('path'); // Local File Path for Js/CSS
const app = express();
const db = require('./models');

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(ejsLayouts);


app.use(
    helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [" 'self' ", "https://*.harvard.edu" ],
      fontSrc: [" 'self' ", "fonts.gstatic.com", "unsafe-inline" ],
      styleSrc: [" 'self' ", "unsafe-inline", "fonts.googleapis.com"],
      imgSrc: [ " 'self' ", "https://*.harvard.edu" ]
    },
  })
); 

"style-src 'self' https://fonts.googleapis.com;"
"font-src 'self' https://fonts.gstatic.com"

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  let alerts = req.flash();
  console.log(`🚨 Alerts`, alerts);
  res.locals.alerts = alerts;
  res.locals.currentUser = req.user;
  next();
  console.log(`🔫`)
});


app.get('/', (req, res) => {
  console.log(`🚀 Req.user`, req.user)
  res.redirect('/auth/login'); // Send the user immediately to login
});

app.get('/profile', isLoggedIn, (req, res) => {
  
  // db.treasure.findOne({
  //   where: { id: req.params.id },
  //   include: [db.treasure]
  // }).then((treasure) => {
  //   console.log(`💎 Treasure`, treasure)
  // }).catch((error) => {res.status(400).render('main/404')});
  console.log(`💎 req.params`, req.params)

});


app.use('/auth', require('./routes/auth')); // Login/Signup
app.use('/treasure', require('./routes/treasure')); // Most app routes

app.listen(process.env.PORT || 3000, () => {
  console.log('...listening on', process.env.PORT || 3000 );
});