var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = Promise;

var User = require('./user');

mongoose.connect('localhost:27017/takeahike');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connectttt db");
});

module.exports = {
  User: User
};