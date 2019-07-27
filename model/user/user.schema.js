const mongoose = require('mongoose');
let crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  saltSecrete: String
});

userSchema.pre("save", function(next) {
  let user = this;
  if (user.password) {
    let hash = crypto.pbkdf2Sync(
      user.password,
      "salt",
      32,
      10,
      "sha512"
    );
    user.password = hash.toString("hex");
  }
  next();
});

module.exports = mongoose.model('User', userSchema);