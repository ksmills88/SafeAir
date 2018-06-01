var db = require("../models");

module.exports = function (app) {
  app.post("/api/createaccount/", function (req, res) {
    db.users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.get("/api/login/", function (req, res) {
    db.users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (dbGet) {
      res.json(dbGet);
    });
  });
};