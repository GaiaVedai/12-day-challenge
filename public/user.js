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



