
// /**
//  * @class Responsible for events

class EventsHandler {
    constructor(ajaxRequests, user, renderer) {
        this.ajaxRequests = ajaxRequests;
        this.user = user;
        this.renderer = renderer;
        this.$videoContainer = $(".video-container");
    }

    registerAddUser() {
        $('.submit-user-name').on('click', ()=> {
            let $input = $(".add-user").val()
            if ($input === "")  {
                alert("Please enter your name!");
            } else {
                this.ajaxRequests.postNewUser("POST", '/users', $input)
                    .then((data) => {
                        this.user.addUser(data);
                        this.renderer.renderUser(this.user.users);
                        // $input.val("");
                    })
            }
        });
    }

    registerAddChallenge() {
        $('.challenge').on('click', ()=> {
            let type = $('.challenge').data('type');
            let $userName = $('.username-header').data('name');
            let userIndex = this.user._findIndexByUserName($userName);
            this.ajaxRequests.postNewChallenge("POST", '/challenges/'+type, $userName)
                .then((data) => {
                    this.user.addNewChallenge(data.challenges[data.challenges.length-1], userIndex);
                    this.renderer.renderChallenge(this.user.users, userIndex);
                })
        })

    }

    registerChooseVideo(){
        $('.challenge-name').on('click', '.start-challenge', (event)=> {
            let $challengeHeader= $(event.currentTarget).siblings('.chall-header');
            let $type = $challengeHeader.data('type');
            this.ajaxRequests.getVideo("GET", $type)
                .then((data)=>{
                    this.renderer.renderVideosToChoose(this.renderer.videoObj(data))
                })

            // this.renderer.IFramePlayerAPI();
            // this.renderer.onYouTubeIframeAPIReady(this.renderer.videoIdGo(this.user.users[0].challenges[0].videos[0].id))
            // this.renderer.onPlayerReady(event)
        })
    }

    registerAddVideo(){
        $('.challenge-name').on('click', '.image-btn', (event)=> {
            let $clickedImgBtn = $(event.currentTarget);
            let $videoId = $clickedImgBtn.data('id');
            let $videoContainer = $clickedImgBtn.closest('.video-container');
            let $challengeName = $videoContainer.siblings('.challenge-name');
            let $challengeHeader = $challengeName.find('.chall-header')
            let $type = $challengeHeader.data('type');
            let $mainContainer = $videoContainer.closest('.main-container');
            let $header = $mainContainer.siblings('.header');
            let $username = $header.find('.username-header').data('name');
            let userIndex = this.user._findIndexByUserName($userName);
            let challengeID = $challengeHeader.data('id');
            let challengeIndex = this.user._findIndexByChallengeID (userIndex, challengeID)
            this.ajaxRequests.postNewVideo("POST", '/challenges/'+$type+$videoId, $username)
                .then((data)=>{
                    this.user.addNewVideo($videoId, challengeIndex, userIndex)
                })
        })
    }

    registerWatchVideo(){
        $('.video-container').on('click', '.finish-challenge', (event)=> {
            this.renderer.onYouTubeIframeAPIReady(this.renderer.videoIdGo('VaoV1PrYft4'));
            this.renderer.onPlayerReady(event); 
        })
    }
}

export default EventsHandler


    // registerRemovePost() {
    //     this.$posts.on('click', '.remove-post', (event) => {
    //         let $currentPost =  $(event.currentTarget).closest('.post')
    //         let index = $currentPost.index();
    //         let $currentPostDataId = $currentPost.data('id');
    //         this.postsRequest.deletePost($currentPostDataId)
    //         .then((data)=>{
    //             alert(data);
    //             this.postsRepository.removePost(index);
    //             this.postsRenderer.renderPosts(this.postsRepository.posts);
    //         })
    //     });

    // }