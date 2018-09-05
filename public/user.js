/**
 * @class Responsible for storing and manipulating Challenges
 */
class User {
    constructor(name, type) {
        this.user = name
        this.startDate = Date.now()
        this.challengeType = type 
        this.videos = {} //{ day1: { status: "open", id: "id" }, 
                        // day2 : { status: "locked", id: "id" } }
                        // status: "open" / "watched" / "locked"
    } 

    // watchVideo(day) {
    //   this.videos.day.status = "watched"
    // }

    // fetch(type) {
    //     this.videos = {} // ajax request to server to get object from data base
    //     // at the beginning only the first video is open to watch
    // }
}

export default User;


