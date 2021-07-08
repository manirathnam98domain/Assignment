const mongoose    = require("mongoose");
const Schema      = mongoose.Schema

const userSchema   = new Schema({


  email:{
    type: String, 
    unique: true,
    required: true
  },

  fisrtName :{
    type: String,
  },

  lastName :{
      type: String,
   },
    address :{
      type: String,
    },
    birthdate :{
      type: String,
    },
    password: {
      type:String,
    }

})

const User = mongoose.model('User', userSchema);

module.exports  = User








