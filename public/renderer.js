    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
class Renderer {
    constructor() {
        this.$videoContainer = $(".video-container");
        this.$i = $('.i');
        this.$userTemplate = $('.user-template').html();
        this.$challengeTemplate = $('#challenge-template').html();
    }

    renderUser(users){
        // this.$.empty(); // complete this
        let template = Handlebars.compile(this.$userTemplate);
        for (let userIndex = 0; userIndex < users.length; userIndex++) {
            let newHTML = template(users[userIndex]);
            console.log(newHTML);
            this.$i.append(newHTML);
        }
    }

    renderChallenge(users){
        let template = Handlebars.compile(this.$challengeTemplate);
        for (let userIndex = 0; userIndex < users[userIndex].length; i++) {
            let newHTML = template(users[userIndex].challenges[0]);
            console.log(newHTML);
            this.$videoContainer.append(newHTML);
        }


    }

    // IFramePlayerAPI(){

    // }

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


    // renderComments(users) {
    //     let $commentsList = $(post).find('.comments-list');
    //     $commentsList.empty();
    //     let template = Handlebars.compile(this.$commentTemplate);
    //     for (let i = 0; i < posts[postIndex].comments.length; i++) {
    //       let newHTML = template(posts[postIndex].comments[i]);
    //       $commentsList.append(newHTML);
    //     }
    // }
}

export default Renderer;