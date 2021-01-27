const db = require('./models');

// db.user.create({
//   email: "email@email.com",
//   password: "password"
// }).then(user =>  { console.log(`❌ user: `, user)});

db.treasure.findOrCreate({
    where: {
        image: 'https://nrs.harvard.edu/urn-3:HUAM:CARP08828_dynmc?width=300&height=300'
      },
      defaults: {
        userId: 1
      }  
});