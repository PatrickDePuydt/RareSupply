const db = require('./models');
// Create treasure

db.treasure.findOrCreate({
  where: {
    image_url: "https://nrs.harvard.edu/urn-3:HUAM:48875_dynmc?height=300&width=300",
    user_id: 1
  }
})
// Create an associated item