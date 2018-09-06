
import AjaxRequests from './ajax-requests.js';
import EventsHandler from './events-handler.js'; 
import User from './user.js';
import Renderer from './renderer.js'; 

let ajaxRequests = new AjaxRequests();
let user = new User();
let renderer = new Renderer();
let eventsHandler = new EventsHandler(ajaxRequests, user, renderer);

eventsHandler.registerAddUser();
eventsHandler.registerAddChallenge();
eventsHandler.registerChooseVideo();
eventsHandler.registerAddVideo();
// eventHandler.registerFinishChallenge()
