const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');


router.get('/', (req, res) => {
  const resource = "image"
  const filter = "keyword=abstract&size=25"
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/${resource}?${filter}&apikey=${accessKey}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.records;
    res.render('treasure', {PAYLOAD: responseResults});
  })

})

// Individual Image View
router.get('/:id', (req, res) => {
  const id = req.params.id
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/image/${id}?apikey=${accessKey}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data;
    res.render('treasure/image', {
      PAYLOAD: responseResults
    });
  })
});

router.post('/', (req, res) => {
  const reqDotBody = JSON.parse(JSON.stringify(req.body));
  const harvardImageID = reqDotBody.harvardImageId;
  const imageUrl = reqDotBody.url;

  db.treasure.findOrCreate({
    where: {
      userId: req.user.id,
      harvardImageID: harvardImageID,
      imageUrl: imageUrl
    }
  }).then( res.redirect('/treasure') )
  
});

router.get('/saved/day', (req, res) => {
  res.send('Working 🥜');
});

router.get('/saved/month', (req, res) => {
  res.send('Working 🍑');
});

router.get('/saved/year', (req, res) => {
  res.send('Working 🍑');
});

module.exports = router;
