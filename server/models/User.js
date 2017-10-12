const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    salt: String
  }
)

User = mongoose.model('User', UserSchema);

module.exports = User;
