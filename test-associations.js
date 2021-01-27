const db = require('./models');

db.treasure.findOrCreate({
    where: {
        image: 'https://nrs.harvard.edu/urn-3:HUAM:CARP08828_dynmc?width=300&height=300',
        userId: 1
    },
    defaults: {
        userId: 1
    }
});