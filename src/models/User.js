
// const LoginSchema=new mongoose.schema({
//   username:{
//     type: String,
//     requried: true
//   },
//   password:{
//     type: String,
//     requried: true
//   }
// })

// const collection = new mongoose.model("user",LoginSchema)
// module.export = collection;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
     required: true 
    },
  email: { 
    type: String,
     required: true,
      unique: true
     },
  password: { 
    type: String,
     required: true 
    },
});

module.exports = mongoose.model('users', userSchema);
