const express = require("express");
const defaultRouter = express.Router();
const defaultController = require('../Controller/DefaultController');

defaultRouter.get('/', defaultController.indexAction);
defaultRouter.post('/register', defaultController.registerAction);
defaultRouter.post('/connect', defaultController.connectAction);

module.exports = defaultRouter;