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

  app.post("/api/login/", function (req, res) {
    db.users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (dbGet) {
      res.json(dbGet);
    });
  });

  app.post("/api/alert/", function (req, res) {
    db.accidents.create({
        name: req.body.email,
        location: req.body.location,
        nNumber: req.body.nNumber,
        comments: req.body.comments
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/search/:paramOne", function (req, res) {

    var query = ""

    if (req.params.paramOne.includes(",")) {

      query = req.params.paramOne; 

      query = "typeaircraft: { [Op.or]: [" + query + "]}"
      console.log(query);
    };


    db.search.findAll({
      where: {
        nnumber: req.params.paramOne,
      }
    }).then(function (dbData) {
     
      var results = dbData;
  
      var trimResults = JSON.parse(JSON.stringify(results).replace(/"\s+|\s+"/g,'"'));
      
      res.json(trimResults);
      
      // console.log(trimResults);
    });
  });
};