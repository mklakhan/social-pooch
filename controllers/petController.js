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
      putPet: function(req,res) {
        // db.Pet.updateOne({id:})
        res.send("testing putPet")
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
        const pet_owner = req.params.pet_owner
        console.log("getting pet friends: ", req.params)
        //db.Pet.findById({ pet_owner: req.params.pet_owner })   
        db.Pet.find( { pet_owner: { $eq: pet_owner } } )       
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