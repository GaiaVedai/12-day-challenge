// @class Responsible for managing the Ajax requests from the clientSide

class AjaxRequests {
        constructor() {
        }
    
    
    postNewChallenge(method, url, challengeType){}
    // function that sends a post req.(method) to the server(url = correct route), 
    // with the chosen type challenge and return a new challenge object as its response(data).
    
    updateChallengeInDB(method, url, challengeID){}
    // function that sends a put req.(method) to the server(url = correct route) 
    // with the challengeID and returns the updated challenge object with the changed data.
  
    export default AjaxRequests;