var mongoose = require('mongoose')
var Schema = mongoose.Schema

let userSchema = new Schema({
  userName: String,
  challenges: [challengeSchema]
})

let challengeSchema = new Schema({
  type: String,
  days: [daySchema]
})

let daySchema = new Schema({
  doneDate: Date,
  videoId: String,
  Done: boolean
})


<<<<<<< HEAD

=======
>>>>>>> 0ad663d5c2c775805d5bec002f6e9eba7c82ba27
let Day = mongoose.model('day', daySchema)

let Challenge = mongoose.model('Challenge', challengeSchema)

let User = mongoose.model('User', userSchema)

<<<<<<< HEAD
=======

>>>>>>> 0ad663d5c2c775805d5bec002f6e9eba7c82ba27
module.exports = { Day: Day, Challenge: Challenge, User: User}
