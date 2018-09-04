class EventsHandler {
    constructor(ChallengeRepository, AjaxRequests) {
        this.ChallengeRepository = ChallengeRepository;
        this.AjaxRequests = AjaxRequests;

        this.$posts = $(".posts");
    }