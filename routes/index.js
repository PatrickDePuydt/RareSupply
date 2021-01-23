const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {

  // 1.1 Model Association, notice no " ' ' " around `pokemon`
  db.pokemon.findAll()
  .then( favorites => {
    console.log('🪀 🪀 🪀 GET /: ', favorites)
    res.render('pokemon/index', {
      treasure: favorites
    })
  })
  .catch(error => console.log(`❌ Error`, error));
});


router.post('/', function(req, res) {
  db.pokemon.findOrCreate({
    where: {
      name: req.body.name
    }
  }).then( digimon => {
    res.redirect('/pokemon')
  });
});

module.exports = router;
