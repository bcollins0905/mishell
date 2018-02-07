var db  = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // If a user sends data to add a new character...
  app.post("/api/NewSignUps", function(req, res) {
    // Take the request...
      var signup = req.body;
    // Create a routeName
        console.log(req.body)
    // Then add the character to the database using sequelize
    db.NewSignUps.create({
        name: signup.name,
        email: signup.email
      }).then(function(NewSignUps){
    res.json(NewSignUps);
      })
        .catch(function(err) {
    res.json(err);
      })
    });
  }




