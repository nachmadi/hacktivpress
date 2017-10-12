const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    salt: String
  }
)

User = mongoose.model('User', UserSchema);

module.exports = User;
