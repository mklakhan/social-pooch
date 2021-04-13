const db = require("../models");

module.exports = {
    createUser: function(req, res) {
        db.User.create(req.body)
          .then(data => {
            res.json(data)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send()
          })
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