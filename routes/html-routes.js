
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/database", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/database.html"));
  });

  app.get("/report", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/report.html"));
  });

  app.get("/flighttracker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/flighttracker.html"));
  });

  app.get("/notifly", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notifly.html"));
  });
};
