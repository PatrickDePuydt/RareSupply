require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.redirect('/auth/login'); // Send the user immediately to login
});

app.get('/profile', (req,res) => {
  res.render('profile');
});

app.use('/auth', require('./routes/auth'));
app.use('/treasure', require('./routes/treasure'));


app.listen(port, () => {
  console.log('...listening on', port );
});