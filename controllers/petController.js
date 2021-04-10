const db = require('../models')


module.exports = {
    createLikes: function(req, res) {
      db.Likes.create(req.body)
        .then(petData => {
          res.json(petData)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send()
        })
    },
    getLikes: function(req, res) {
        db.Likes.find({})
          .sort({ date: -1 })
          .then(petData => {
            res.json(petData)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
      },
}