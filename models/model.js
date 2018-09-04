

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

