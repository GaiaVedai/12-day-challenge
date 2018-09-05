/**
 * @class Responsible for storing and manipulating Challenges
 */
class User {
    constructor() {
        this.users = []
        this.challenges = []
    } 

    addUser(user){
        this.users.push(user)
    }

    addNewChallenge(challenge){
        this.users[0].challenges.push(challenge);
    }

    updateChallengeOfUser(user){
        this.user[0] = user;
    }
}

export default User
<<<<<<< HEAD
=======

>>>>>>> 0ad663d5c2c775805d5bec002f6e9eba7c82ba27


