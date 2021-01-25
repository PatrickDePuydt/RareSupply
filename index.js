require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  const question = "object?medium=2028216&place=2028213"
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/${question}&apikey=${accessKey}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.records;
    res.render('index', {PAYLOAD: responseResults});
  })
});

app.use('/treasure', require('./routes/treasure'));


app.listen(port, () => {
  console.log('...listening on', port );
});