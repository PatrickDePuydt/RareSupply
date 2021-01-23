const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// GET / - main index of site
app.get('/', function(req, res) {
  let apiURL = 'http://pokeapi.co/api/v2/pokemon/';
  // Use request to call the API
axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.results;

    res.render('index', { pearls: responseResults.slice(0, 151) });
  })
});


// Imports all routes from the pokemon routes file
app.use('/pokemon', require('./routes'));

app.listen(port, () => {
  console.log('...listening on', port );
});