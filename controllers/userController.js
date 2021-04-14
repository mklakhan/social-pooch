const db = require("../models");

module.exports = {
    
    createUserId: function(req,res) {
    console.log(req.body)    
    res.send({ok:"true"})
    },

    getUser: function(req, res) {
        const {id} = req.params
        db.User.findById(id)
            .then(userData => {
                res.json(userData)
            })
            .catch( err => {
                console.log(err)
                res.status(500).send()
            })
    }
}