const router = require("express").Router();
const userController = require("../controllers/userController.js");
const petController = require("../controllers/petController.js")

router.route("/api/users/:id")
    .get(userController.getUser)

router.route("/api/likes")    
    .get(petController.getLikes)
    .post(petController.createLikes)
    


module.exports = router;
