const db = require("../models");

module.exports = {
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