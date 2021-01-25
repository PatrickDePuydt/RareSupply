const express = require('express');
const router = express.Router();
const axios = require('axios'); 


let seedImage = ["https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150", "https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150"]

router.get('/', (req, res) => {
  const question = "object?medium=2028216&place=2028213"
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/${question}&apikey=${accessKey}`;

  axios.get(apiURL).then(apiResponse => {
    let responseResults = apiResponse.data.records;
    res.render('treasure', {PAYLOAD: responseResults});
  })

})

router.get('/:id', (req, res) => {
  
  const id = req.params.id
  const accessKey = process.env.API_KEY;
  const apiURL = `https://api.harvardartmuseums.org/image/${id}?apikey=${accessKey}`;

  axios.get(apiURL).then(apiResponse => {
    // console.log(`☀️ API Response: `, apiResponse)
    let responseResults = apiResponse.data;

    res.render('treasure/image', {PAYLOAD: responseResults});
  })
  
});

module.exports = router;
