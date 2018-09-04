var mongoose = require('mongoose')
var Schema = mongoose.Schema

let videoSchema = new Schema({
  id: String,
  status: String
})

let challengeSchema = new Schema({
  name: String,
  length: Number,
  videos: [videoSchema]
})

let userSchema = new Schema({
  userName: String,
  challenges: [challengeSchema]
})

let Video = mongoose.model('Video', videoSchema)

let Challenge = mongoose.model('Challenge', challengeSchema)

let User = mongoose.model('User', userSchema)

module.exports = { Video: Video, Challenge: Challenge, User: User}
