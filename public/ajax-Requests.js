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
        .catch(function (err) {
            console.log(err);
            alert('an error had occure');
        })
    }    

    postNewChallenge(method, url, userName){
        return $.ajax({
            method: method,
            url: url,
            data: {name: userName,}
        })
        .then(function (data) { //data = new challenge object
            console.log(data);
            return data;
        })
        .catch(function (err) {
            console.log(err);
            let errorMes = 'error had occure';
            return errorMes;
        }) 
    }

    getVideo(method, type){
        return $.ajax({
            method: method,
            url: this.createUrl(type)
        })
        .then(function (data) { //data = obj with images + videosIds
            console.log(data);
            return data;
        })
        .catch(function (err) {
            console.log(err);
            alert('an error had occure');
        })
    }

    createUrl(type){
        let baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=';
        let search = type + '+10+minutes';
        let endUrl = '&type=video&videoDuration=medium&videoEmbeddable=true&key=AIzaSyA0xbusuINEtRr8PBIreJwSR8XbiQZ7ZaM';
        let newUrl = baseUrl + search + endUrl;
        return newUrl;
    }

    postNewVideo(method, url, userName){
        return $.ajax({
            method: method,
            url: url,
            data: {name : userName}
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