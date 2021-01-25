const express = require('express');
const router = express.Router();

let seedImage = ["https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150", "https://nrs.harvard.edu/urn-3:HUAM:77963_dynmc?height=150&width=150"]

router.get('/', (req, res) => {
  res.render('treasure', {seedImage})
})

module.exports = router;
