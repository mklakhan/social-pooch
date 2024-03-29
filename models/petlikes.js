const mongoose = require("mongoose")
const Schema = mongoose.Schema

const petlikesSchema = new Schema ({
    petliked_name: {
        type: String,
        required: 'A pet liked name is required'
      },
      date: {
        type: Date,
        default: Date.now()
      }
})

const Likes = mongoose.model("Likes", petlikesSchema);
module.exports = Likes;