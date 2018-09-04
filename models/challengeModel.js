var mongoose = require('mongoose')
var Schema = mongoose.Schema

let videoSchema = new mongoose.Schema({
  id: String, 
  status: String 
})

let challengeSchema = new mongoose.Schema({
    name: String,
    length: Number,
    videos: [videoSchema]
})

let Video = mongoose.model('Video', videoSchema)

let Challenge = mongoose.model('Challenge', challengeSchema)

module.exports = { Video: Video, Challenge: Challenge }