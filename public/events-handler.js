/**
 * @class Responsible for events
 */
class EventsHandler {
    constructor(ajaxRequests, user, renderer) {
        this.ajaxRequests = ajaxRequests;
        this.user = user;
        this.renderer = renderer;
        this.$videoContainer = $(".video-container");
    }

    registerAddUser() {
        $('#add-user').on('click', (event) => {
            event.preventDefault();
            let $input = $("#userText");
            if ($input.val() === "") {
                alert("Please enter text!"); 
            } else {
                this.ajaxRequests.postNewUser(POST, '/users', $input.val())
                .then((data)=>{
                    this.user.addUser(data);
                    this.renderer.renderUser(this.user.users[0].username);
                    $input.val("");
                })
            }
        });        
    }

    registerAddChallenge() {
        $('.challenge').on('click', function(){
            let $username = $("#username").data('id');
            // let $clickedType = $(this).data('type');
            this.ajaxRequests.postNewChallenge(POST, '/challenges/yoga/+id', $username)
                .then((data)=>{
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