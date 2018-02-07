// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var db = require('./app/models/index');
var session = require ('express-session');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mishell_db"
  });
}
// Make connection. 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
	});
})
// Export connection for our ORM to use.
module.exports = connection;