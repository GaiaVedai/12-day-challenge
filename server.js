var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./server/routes/api')

const SERVER_PORT = (8100);

mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/appdata', function () {
  console.log("DB connection established!"); 
})

const app = express();
app.use('/', api);
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
