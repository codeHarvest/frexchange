const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new schema({
  name : {
    type : String,
    required: [true, 'cannot be blank'],
    minLength: 4,
    maxLength: 28
  },
  email:{
    type: String,
    required: [true, 'cannot be blank'],
    unique: true
  },
  password: {
    type: String,
    minLength: 6
  }
});


const user = mongoose.model('User', userSchema);

module.exports = user;