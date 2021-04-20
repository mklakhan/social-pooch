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
      dislikePet: function(req,res) {
        console.log("req params ", req.body);
        const pet_owner = req.body.user_id
        const dislike_pet_id = req.body.id

        db.Pet.updateOne({user_id: {$eq: pet_owner} },
          { $pull: {
              likes: {_id: dislikePet}
              } 
          },
          //{pet_name: 'Tiger2'},
          function(err, data) {
            if (err) {
              console.log(err)
            }
            else {
              console.log("update complete: ",data)
            }
          }
        )
        //   .then(petData => {
        //     res.status(200).send("hi " + pet_owner)
        //   })
        // db.Pet.findOneAndReplace(
        //   {user_id: pet_owner},
        //   {likes}
        // )

        // //
        // // get the profile of the pet owner

        // db.Pet.find( { user_id: { $eq: pet_owner } } )   
        //   .populate("likes")    
        //   .then(petData => {
        //     console.log("friend pet data: ", petData)
        //     //res.json(petData)
        //   })
        //   .catch(err => {
        //     console.log(err)
        //     res.status(500).send()
        //   })

        // db.Pet.updateOne({id:})
        //res.send("testing dislikePet")

        res.status(200).send("update complete")
        
      },
}