const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const petSchema = new Schema({
    pet_name: {
        type: String,
        required: 'Pet name is required'
      },
      species: {
        type: String,
        required: "Identification of species is required"
      },
      gender: {
        type: String,
        required: "Gender is required"
      },
      temperment: {
        type: String,        
      },
      playdate: {
        type: String,        
      },
      zipcode: {
        type: Number,        
      },
      petPic: {
        type: String,        
      },
      pet_owner: {
        type: String
      },
      user_id: {
        type: String
      },
      likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Likes'
      }]     
})

const Pet = mongoose.model("Pet", petSchema)
module.exports = Pet;