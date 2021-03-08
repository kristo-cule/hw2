const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  ssn: {
    type: String,
    required: true,
    unique: true,
    min: 11,
    max: 11,
    validate: {
      validator(e) {
        return /\d{3}-\d{2}-\d{4}/.test(e);
      },
    },
  },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  address: { type: String, required: false },
  phone: {
    type: String,
    required: false,
    min: 12,
    max: 12,
    validate: {
      validator(e) {
        return /\d{3}-\d{3}-\d{4}/.test(e);
      },
    },
  },
});

const User = Mongoose.model('User', UserSchema);

module.exports = User;
