const express = require('express');
var session = require('express-session');
const authentication = require('./authentication');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

var db = require('./models/db_connector');

// app.use(function (req, res, next) {
//  console.log(req.url);
//  next();
// });

app.use(session({
  secret : 'firnejg4',
  resave : true,
    saveUninitialized : true
}));

app.use(bodyParser.json());

app.use(authentication.initialize()); // Add passport initialization
app.use(authentication.session());

app.use('/api', require('./controllers/login'));

app.use(express.static('./app'));

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
