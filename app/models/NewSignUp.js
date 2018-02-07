var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var NewSignUps = sequelize.define("NewSignUps", {

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
    email: {
      type: Sequelize.STRING,
      allowNull: false
      //validate: {
            // realEmail: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    //}    

  }
    
});

  return NewSignUps;

};


