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
  let apiURL = 'http://pokeapi.co/api/v2/pokemon/';
  
  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.results;
    res.render('index', { pearls: responseResults.slice(0, 151) });
  })

});

app.get('/pearls', (req, res) => {
  res.render('pearls');
})

app.listen(port, () => {
  console.log('...listening on', port );
});