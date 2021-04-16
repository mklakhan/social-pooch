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
      getPetFriends: function(req, res) {
        //const pet_owner = req.params.pet_owner
        const pet_owner = req.params.user_id

        console.log("Getting pet friends: ", req.params)

        //db.Pet.findById({ pet_owner: req.params.pet_owner })   
        db.Pet.find( { user_id: { $eq: pet_owner } } )   
          .populate("likes")    
          .then(petData => {
            console.log("friend pet data: ", petData)
            res.json(petData)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
      },
}