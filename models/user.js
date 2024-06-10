const mongoose = require('mongoose');
//schema
const userschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
   type: String,
   required: true,
   unique: true
  },
  jobtitle: {
    type: String,
  },
  gender: {
    type: String,
  },
  
},
{ timestamps: true }
);

//model
const user =mongoose.model('user', userschema);

module.exports = user;