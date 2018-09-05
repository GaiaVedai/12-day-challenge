
const express = require('express');
const router = express.Router();
let path = require('path')
const {User, Challenge, Day} = path.dirname('./models/model');

// 1. post new User:
router.post('/users', (req, res)=> {
    let userName = req.body.name;
    console.log(userName)
    let user = new User({
        userName: userName,
        challenges: []
    });
    console.log(user)
    user.save((err, data)=> {
        if (err) {
            console.log(err);
        }
        console.log(data + 'has been saved to db');
        res.send(user);
    })
})

// 2. post new challenge -> add the challenge to the user:
router.post('/challenges/yoga', (req, res) => {
    let {user} = req.body;
    let challange = {
        type: Yoga, 
        length: Number, 
        days: [
            {doneDate: Date,
            videoId: '-yZR0fdUqHM',
            Done: false}
        ]
    };
    User.findOne({userName: user}, function(err, newUser){
        if (err) {
            console.log(err);
        }
        newUser.challenges.push(challange);
        User.findOneAndUpdate({userName: user}, newUser, function(err, challenge){
            if (err) {
                console.log(err);
            }
            console.log(challenge);
            res.send(challenge);
        })
    });
});

// 3. put -> make the day's status: watched/locked for the challenge of the specific user:
router.put('/challenges/yoga', (req, res) => {
    let {user, id} = req.body;
    User.findOne({userName: user}, function(err, updatedUser){
        if (err) {
            console.log(err);
        }
        updatedUser.challenges[0].days[0].findByIdAndUpdate({videoId: id}, {Done: true}, function(err, doneStatus){
            if (err) {
                console.log(err);
            }
            console.log(doneStatus);
        });
        User.findOneAndUpdate({userName: user}, updatedUser, function(err, result){
            if (err) {
                console.log(err);
            }
            console.log(result);
            res.send(updatedUser);
        });
    });
});

module.exports = router;




// method: post.
// // *creating a new route called ":type/challenges" .
// // * getting the challenge's Type as params from the client.
// mongoose:
// // * finding the correct type DB/collection, and returning back the type with its videos.
// // * creating a new challenge in the DB/collection "challenges" with the type and videos from the other DB/collection.
// // * saves the new challenge to the DB(+ pushing video to the videos array), in addition of a callback function:
// // * callback func with 2 parameters (err, data). send a response to the client with the new object challenge (data).

// 2. update challenge:
// // method: put.
// // * creating a path route "/challenges/:challengeID".
// // * getting the challengeId as parameter.
// mongoose:
// // * finding the correct challange in the challenges collection/DB.
// // * finding the "day" key and change it value from false to true.
// // * updating the challenge obj (save), in addition of a callback function:
// // * callback func with 2 parameters (err, data). 
// // send a response to the client with the updated object challenge (data).

