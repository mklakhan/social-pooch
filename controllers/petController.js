const db = require('../models')


module.exports = {
    createPet: function(req, res) {
      db.Pet.create(req.body)
        .then(petData => {
          res.json(petData)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send()
        })
    },
    getPet: function(req, res) {
        const { id } = req.params
        db.Pet.find({ id: id })          
          .then(petData => {
            res.json(petData)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
      },
      getPets: function(req, res) {
        db.Pet.find({})
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