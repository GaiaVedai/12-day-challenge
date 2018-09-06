const mongoose = require('mongoose')
const Schema =  mongoose.Schema

// let daySchema = new Schema({
//   doneDate: Date,
//   videoId: String,
//   done: Boolean
// })

let challengeSchema = new Schema({
  type: String,
  done: Boolean,
  videoId: String
})

let userSchema = new Schema({
  userName: String,
  challenges: [challengeSchema]
})

// let Day = mongoose.model('day', daySchema)

// let Challenge = mongoose.model('challenge', challengeSchema)

let User = mongoose.model('user', userSchema)


// module.exports = { Day: Day, Challenge: Challenge, User: User}
module.exports = {User};
