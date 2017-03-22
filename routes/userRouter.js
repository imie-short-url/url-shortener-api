const express = require('express');
const userRouter = express.Router();
const userController = require('../Controller/UserController');
const jwt = require('express-jwt');

userRouter.get('/:userId(\\d+)/add-url',
    jwt({secret: 'secret'}), userController.addUrlAction);
userRouter.post('/:userId(\\d+)/remove-url/:urlId(\\d+)', jwt({secret: 'secret'}), userController.deleteUrlAction);
userRouter.get('/:userId(\\d+)/get-urls', jwt({secret: 'secret'}), userController.showAction);

module.exports = userRouter;