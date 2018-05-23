var db = require("../models");

module.exports = function(app) {
    app.post("/api/createAccount", function(req, res) {
        console.log(req.body);
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
};