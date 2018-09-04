
import AjaxRequests from './ajax-Requests.js';
import User from './user.js';
import Renderer from './renderer.js'; 
import EventsHandler from './events-handler.js'; 

let ajaxRequests = new AjaxRequests();
let user = new User();
let renderer = new Renderer();
let eventsHandler = new EventsHandler(ajaxRequests, user, renderer);

eventsHandler.registerAddUser();
eventsHandler.registerAddChallenge();
// eventsHandler.registerUpdateChallenge();

