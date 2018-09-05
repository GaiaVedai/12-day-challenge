var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./server/routes/api')
const app = express();
const SERVER_PORT = (process.env.PORT || 8100)

mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/appdataDB', function () {
  console.log("DB connection established!"); 
})

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});