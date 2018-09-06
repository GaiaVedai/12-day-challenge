/**
 * @class Responsible for storing and manipulating Challenges
 */
class User {
    constructor() {
        this.users = []
        this.challenges = []
    } 

    addUser(newUser){
        this.users.push(newUser)
    }

    _findIndexByUserName (userName){
        for (let userIndex =0; userIndex < this.users.length; userIndex++) {
            if (this.users[userIndex].userName === userName){
                return userIndex;
            }
        }
    } 

    _findIndexByChallengeID (userIndex, challengeID){
            for (let challengeIndex = 0; challengeIndex < this.user[userIndex].challenges.length; c++) {
                if (this.user[userIndex].challenges[challengeIndex]._id === challengeID){
                    return challengeIndex;
                }
            }
    }

    addNewChallenge(challenge, userIndex){
        this.users[userIndex].challenges.push(challenge);
    }

    addNewVideo(videoId, challengeIndex, userIndex){
        this.users[userIndex].challenges[challengeIndex].videoId = videoId;
    }

}

export default User


