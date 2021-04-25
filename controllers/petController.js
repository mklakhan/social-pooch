const db = require('../models')


module.exports = {
    
    // create a new pet profile
    //
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

    // the the profile of the pet id
    //
    getPet: function(req, res) {
        const { id } = req.params
        console.log(id)
        db.Pet.find({ id: id })            
          .then(petData => {           
            res.json(petData)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
      },

    getPetA: function(req, res) {
        const { id } = req.params
        console.log(id)
        db.Pet.find({ user_id: id })            
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
      
      // get all available pets
      //
      getPets: function(req, res) {
        const pet_owner = req.params.user_id

        // find all pets, except yourself
        //
        db.Pet.find({user_id: { $ne: pet_owner }})
          .sort({ date: -1 })
          .then(petData => {
            res.json(petData)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
      },      
     
      // get all owner pet friends from the likes array
      //
      getPetFriends: function(req, res) {       
        const pet_owner = req.params.user_id

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
 
      // remove the pet id from owner likes array
      //
      dislikePet: function(req,res) {        
        const pet_owner = req.body.user_id
        const dislike_pet_id = req.body.id

        db.Pet.updateOne({user_id: {$eq: pet_owner} },
          { $pull: { likes: dislike_pet_id } },         
          //{pet_name: 'Tiger3'},
        )
        .then( petData => {
          res.json(petData)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send()
        })       
      },

      // add the pet id to the owner likes array
      //
      likePet: function(req,res) {        
        const pet_owner = req.body.user_id
        const like_pet_id = req.body.id

        // replace $push with addToSet, so no dups
        db.Pet.updateOne({user_id: {$eq: pet_owner} },
          { $addToSet: { likes: like_pet_id } },         
          //{pet_name: 'Tiger3'},
        )
        .then( petData => {
          res.json(petData)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send()
        })       
      },
}