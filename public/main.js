
import AjaxRequests from './ajax-requests.js';
<<<<<<< HEAD
=======

>>>>>>> 0ad663d5c2c775805d5bec002f6e9eba7c82ba27
import EventsHandler from './events-handler.js'; 
import User from './user.js';
import Renderer from './renderer.js'; 

let ajaxRequests = new AjaxRequests();
let user = new User();
let renderer = new Renderer();
let eventsHandler = new EventsHandler(ajaxRequests, user, renderer);

eventsHandler.registerAddUser();
<<<<<<< HEAD
eventsHandler.registerAddChallenge();
=======
// eventsHandler.registerAddChallenge();
>>>>>>> 0ad663d5c2c775805d5bec002f6e9eba7c82ba27
// eventsHandler.registerUpdateChallenge();

