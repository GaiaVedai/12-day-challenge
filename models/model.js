<<<<<<< HEAD


const userSchema = new mongoose.Schema({
    name: String,
    challenges: [challengeSchema]
})

const challengeSchema = new mongoose.Schema({
    
    type: String,
    startDay: Date,
    days: [daySchema]
 
});

const daySchema = new mongoose.Schema({
   name: String,
   date: Date,
   done: boolean,
   videoId: String
})

let User = mongoose.model('user', userSchema)
let Challenge = mongoose.model('challengeType', challengeSchema)
let Day = mongoose.model('day', daySchema)

module.exports = (User, Challenge, Day)

=======
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
>>>>>>> refs/remotes/origin/master
