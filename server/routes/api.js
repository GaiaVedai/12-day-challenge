// requires : express, express.router, schemas from (../models) 

1. post new challenge:
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