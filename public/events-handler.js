
// /**
//  * @class Responsible for events

class EventsHandler {
    constructor(ajaxRequests, user, renderer) {
        this.ajaxRequests = ajaxRequests;
        this.user = user;
        this.renderer = renderer;
        this.$videoContainer = $(".video-container");
        this.obj = {};
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
            
            console.log(this.obj)
            let $challengeHeader= $(event.currentTarget).siblings('.challenge-header');
            let $type = $challengeHeader.data('type');
            this.ajaxRequests.getVideo("GET", $type)
                .then((data)=>{
                    this.obj = this.renderer.videoObj(data);
                    this.renderer.renderVideosToChoose(this.renderer.videoObj(data));
                    console.log(this.obj)
                    // $('.video-container').append('<iframe id="this.obj.videoId1" src="https://www.youtube.com/embed/" + "obj.videoId1" + "?enablejsapi=1" frameborder="0"></iframe>')
                    // $('.video-container').append('<iframe id="this.obj.videoId2" src="https://www.youtube.com/embed/" + "obj.videoId2" + "?enablejsapi=1" frameborder="0"></iframe>')
                    // $('.video-container').append('<iframe id="this.obj.videoId3" src="https://www.youtube.com/embed/" + "obj.videoId3" + "?enablejsapi=1" frameborder="0"></iframe>')
                })
        })
    }

    registerAddVideo(){
        $('body').on('click', '.image-btn', (event)=> {
            let $clickedImgBtn = $(event.currentTarget);
            let $videoId = $clickedImgBtn.data('id');
            console.log(this)
            if ($videoId === this.obj.videoId1){
                $('.video-container').append('<iframe id=' + this.obj.videoId1 + ' src="https://www.youtube.com/embed/' + this.obj.videoId1 + '?enablejsapi=1" frameborder="0"></iframe>')
            } else if ($videoId === this.obj.videoId2) {
                $('.video-container').append('<iframe id=' + this.obj.videoId2 + ' src="https://www.youtube.com/embed/' + this.obj.videoId2 + '?enablejsapi=1" frameborder="0"></iframe>')
            } else if ($videoId === this.obj.videoId3){
                $('.video-container').append('<iframe id=' + this.obj.videoId3 + ' src="https://www.youtube.com/embed/' + this.obj.videoId3 + '?enablejsapi=1" frameborder="0"></iframe>')
            }
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
                    this.user.addNewVideo(data.challanges[0].videoId, challengeIndex, userIndex)
                    // this.obj
                })
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