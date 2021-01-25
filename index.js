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
  res.render('index')
});

app.use('/treasure', require('./routes/treasure'));


app.listen(port, () => {
  console.log('...listening on', port );
});