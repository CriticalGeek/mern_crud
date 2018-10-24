const mongoose = require('mongoose');

const { Schema } = mongoose;

const crudSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
}, {
  versionKey: false
});

module.exports = mongoose.model('user', crudSchema);