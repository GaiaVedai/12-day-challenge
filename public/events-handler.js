
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
                        this.renderer.renderUser(this.user.users, this.user.users[0]);
                        $input.val("");
                    })
            }
        });
    }

    registerAddChallenge() {
        $('.challenge').on('click', function () {
            let $username = $("#username").data('id');
            // let $clickedType = $(this).data('type');
            this.ajaxRequests.postNewChallenge(POST, '/challenges/yoga/+id', $username)
                .then((data) => {
                    this.user.addNewChallenge(data);
                    this.renderer.renderChallenge(this.user.users);
                    // this.renderer.IFramePlayerAPI();
                    this.renderer.onYouTubeIframeAPIReady(this.renderer.videoIdGo(this.user.users[0].challenges[0].videos[0].id))
                    this.renderer.onPlayerReady(event)
                })
        })

    }

    // registerStartChallenge() {
    //     $('#start-challenge').on('click', () => {
    //         let 
    // }
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