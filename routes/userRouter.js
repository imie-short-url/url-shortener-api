const express = require('express');
const userRouter = express.Router();
const userController = require('.././UserController');

userRouter.get('/:userId(\\d+)/add-url', userController.addUrlAction);
userRouter.post('/:userId(\\d+)/remove-url/:urlId(\\d+)', userController.deleteUrlAction);
userRouter.get('/:userId(\\d+)/get-urls', userController.showAction);

module.exports = userRouter;