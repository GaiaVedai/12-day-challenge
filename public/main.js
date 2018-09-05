
import AjaxRequests from './ajax-requests.js';
import EventsHandler from './events-handler'; 
import User from './user';
import Renderer from '/renderer'; 

let ajaxRequests = new AjaxRequests();
let user = new User();
let renderer = new Renderer();
let eventsHandler = new EventsHandler(ajaxRequests, user, renderer);

eventsHandler.registerAddUser();
eventsHandler.registerAddChallenge();
eventsHandler.registerUpdateChallenge();

