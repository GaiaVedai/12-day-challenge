// /**
//  * @class Responsible for managing the Ajax requests from the clientSide
//  */
class AjaxRequests {
    constructor() {}

postNewUser(method, url, userName){
    return $.ajax({
       method: method, 
       url: url, 
       data: {name: userName} 
    })
    .then((data)=>{
        console.log(data); // data = new user object (challenges array empty)
        return data;
    })
}    

postNewChallenge(method, url, userName){
    return $.ajax({
        method: method,
        url: url,
        data: {user: userName}
    })
    // .then(function (data) { //data = new challenge object
    //     console.log(data);
    //     return data;
    // })
    // .catch(function (err) {
    //     console.log(err);
    //     let errorMes = 'error had occure';
    //     return errorMes;
    // }) 
}

updateChallengeInDB(method, url, userName, videoID){
    return $.ajax({
        method: method,
        url: url,
        data: {user: userName, id: videoID}
    })
    .then(function (data) { //data = updated challenge object (challenge for day x was finished)
        console.log(data);
        return data;
    })
    .catch(function (err) {
        console.log(err);
        alert('an error had occure');
    })
}     
}

export default AjaxRequests;


// postNewChallenge(method, url, challengeType){}
 // function that sends a post req.(method) to the server(url = correct route), 
// with the chosen type challenge and return a new challenge object as its response(data).

// updateChallengeInDB(method, url, challengeID){}
// function that sends a put req.(method) to the server(url = correct route) 
// with the challengeID and returns the updated challenge object with the changed data.