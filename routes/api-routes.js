const router = require("express").Router();
const userController = require("../controllers/userController.js");
const petController = require("../controllers/petController.js")


router.route("/api/user")
    .post(userController.createUserId)

router.route("/api/users/:id")
    .get(userController.getUser)


// router.route("/api/likes")    
//     .get(petController.getLikes)
//     .post(petController.createLikes)

router.route("/api/pet")    
    .get(petController.getPet)
    .post(petController.createPet)  
    .put(petController.putPet)  

router.route("/api/pets")    
    .get(petController.getPets)

router.route("/api/petFriends/:user_id")
    .get(petController.getPetFriends)    
     

module.exports = router;
