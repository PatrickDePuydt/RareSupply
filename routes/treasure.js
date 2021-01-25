const express = require('express');
const router = express.Router();
const axios = require('axios'); 


let seedImage = ["https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150", "https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150"]

router.get('/', (req, res) => {
  const resource = "object"
  const filter = "medium=2028216&place=2028213"
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/${resource}?${filter}&apikey=${process.env.API_KEY}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.records;
    // console.log(`🍊 apiResponse.data: `, apiResponse.data, '🍊🍊🍊');
    res.render('treasure', {PAYLOAD: responseResults});
  })

})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/image/${id}?apikey=${accessKey}`;
  // console.log(`🚀 apiURL///: `, apiURL, `/// 🚀 apiURL: `)

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data;
    console.log(`🎃 responseResults///: `, responseResults, `/// 🎃 responseResults: `)
    res.render('treasure/image', {PAYLOAD: responseResults});
  })
  
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
