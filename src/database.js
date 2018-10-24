const mongoose = require('mongoose');

const URL = 'mongodb://localhost/user';

mongoose.connect(URL)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;