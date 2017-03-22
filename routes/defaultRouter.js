const express = require("express");
const defaultRouter = express.Router();
const defaultController = require('../Controller/DefaultController');

defaultRouter.post('/register', (req, res) => {
    defaultController.registerAction(req, res)
});

defaultRouter.post('/login', (req, res) => {
    defaultController.loginAction(req, res)
});

module.exports = defaultRouter;