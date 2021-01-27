const express = require('express');
const router = express.Router();
const axios = require('axios'); 


router.get('/', (req, res) => {
  const resource = "image"
  const filter = "keyword=abstract&size=25"
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/${resource}?${filter}&apikey=${process.env.API_KEY}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.records;
    // console.log(`🍊 apiResponse.data: `, apiResponse.data, '🍊🍊🍊');
    res.render('treasure', {PAYLOAD: responseResults});
  })

})

// Individual Image View
router.get('/:id', (req, res) => {
  const id = req.params.id
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/image/${id}?apikey=${accessKey}`;
  // console.log(`🚀 apiURL///: `, apiURL, `/// 🚀 apiURL: `)

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data;
    // console.log(`🎃 responseResults///: `, responseResults, `/// 🎃 responseResults: `)
    res.render('treasure/image', {PAYLOAD: responseResults});
  })
});

router.post('/', (req, res) => {
  // See what's inside `req`
  const reqBody = JSON.parse(JSON.stringify(req.body));
  console.log('🔥🔥🔥: ', reqBody.lorem ,'/🔥')
  // DB find or create
  // Rolling
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
