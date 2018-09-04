// requires : express, express.router, schemas from (../models) 
const express = require('express');
const router = express.Router();
const {User, Challenge, Day} = require('../../models/......Model');



router.post('/users', (req, res)=> {
    let {name} = req.body;
    let user = new User({
        name: name,
        challenges: []
    });
    user.save((err, data)=> {
        if (err) {
            console.log(err);
        }
        console.log(data + ' has been saved to db');
        res.send(user);
    })
})
// 2. post new challenge:
router.post('/challenges/yoga', (req, res) => {
    let {user} = req.body;
    let challange = {
        type: Yoga, 
        startDay: Date, 
        days: [
            {name: day1, date: Date, done: false, videoId:  }
        ]
    }
    })
}

router.post('/comments/:postID', (req, res) =>{
    Post.findById(req.params.postID, function(err, updatedPost){
      if(err){
        console.log(err);
      }
      updatedPost.comments.push(req.body); 
      Post.findByIdAndUpdate(req.params.postID,updatedPost, function(err, result){
        if(err){
          console.log(err);
        }
        res.send(result);
      });
    });

// method: post.
// *creating a new route called ":type/challenges" .
// * getting the challenge's Type as params from the client.
mongoose:
// * finding the correct type DB/collection, and returning back the type with its videos.
// * creating a new challenge in the DB/collection "challenges" with the type and videos from the other DB/collection.
// * saves the new challenge to the DB(+ pushing video to the videos array), in addition of a callback function:
// * callback func with 2 parameters (err, data). send a response to the client with the new object challenge (data).

2. update challenge:
// method: put.
// * creating a path route "/challenges/:challengeID".
// * getting the challengeId as parameter.
mongoose:
// * finding the correct challange in the challenges collection/DB.
// * finding the "day" key and change it value from false to true.
// * updating the challenge obj (save), in addition of a callback function:
// * callback func with 2 parameters (err, data). 
// send a response to the client with the updated object challenge (data).



module.exports = router;