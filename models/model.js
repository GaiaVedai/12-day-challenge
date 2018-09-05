var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/appdata',()=>{console.log('Connected')});

var Schema = mongoose.Schema

let daySchema = new Schema({
  doneDate: Date,
  videoId: String,
  done: Boolean
})

let challengeSchema = new Schema({
  type: String,
  days: [daySchema]
})

let userSchema = new Schema({
  userName: String,
  challenges: [challengeSchema]
})




// let Day = mongoose.model('day', daySchema)

// let Challenge = mongoose.model('Challenge', challengeSchema)

let User = mongoose.model('user', userSchema)

module.exports = {User}
