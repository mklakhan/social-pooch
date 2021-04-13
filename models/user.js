const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,    
  },
  password: {
      type: String,      
  },
  email: {
      type: String,     
  },
  pet: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User