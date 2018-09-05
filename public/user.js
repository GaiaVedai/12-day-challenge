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

    addNewChallenge(challenge){
        this.users[0].challenges.push(challenge);
    }

    updateChallengeOfUser(user){
        this.users[0] = user;
    }
}

export default User


