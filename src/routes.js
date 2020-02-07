const Express = require('express');

const HelloCtrl = require('./controllers/HelloController');
const UserCtrl = require('./controllers/UserController');

const routes = Express.Router();

routes.get('/', HelloCtrl.helloWorld);

routes.post('/users', UserCtrl.store);

module.exports = routes;