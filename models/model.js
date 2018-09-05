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


let Day = mongoose.model('day', daySchema)

let Challenge = mongoose.model('Challenge', challengeSchema)

let User = mongoose.model('User', userSchema)


module.exports = { Day: Day, Challenge: Challenge, User: User}
