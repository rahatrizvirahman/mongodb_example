const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports.UserModel = mongoose.model('user', userSchema);
