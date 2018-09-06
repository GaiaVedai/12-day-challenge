    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
class Renderer {
    constructor() {
        this.$videoContainer = $(".video-container");
        this.$videosToChooseTemplate = $('.videos-to-choose-template').html()
        this.$i = $('.i');
        this.$challengeName = $('.challenge-name');
        this.$userTemplate = $('.user-template').html();
        this.$challengeTemplate = $('.challenge-template').html();
    }

    renderUser(users){
        // this.$.empty(); // complete this
        let template = Handlebars.compile(this.$userTemplate);
        let newHTML = template(users[0]);
        this.$i.append(newHTML);
    }

    renderChallenge(users, userIndex){
        let template = Handlebars.compile(this.$challengeTemplate);
        let newHTML = template(users[userIndex].challenges[0]);
        this.$challengeName.append(newHTML);
    }

    renderVideosToChoose(videoObj){
        let template = Handlebars.compile(this.$videosToChooseTemplate);
        let newHTML = template(videoObj);
        this.$videoContainer.append(newHTML)
    }

    videoObj(data) {
        var obj = { 
            image1: data.items[0].snippet.thumbnails.medium.url,
            image2: data.items[1].snippet.thumbnails.medium.url,
            image3: data.items[2].snippet.thumbnails.medium.url,
            videoId1: data.items[0].id.videoId,
            videoId2: data.items[1].id.videoId,
            videoId3: data.items[2].id.videoId,
        }
        return obj;
    }


    onYouTubeIframeAPIReady(){
        videoIdGo(videoId);
    }

    videoIdGo(videoId){
        let player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        })
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

}

export default Renderer;