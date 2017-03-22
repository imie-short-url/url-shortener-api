const mongoose = require('mongoose');
const User = require('../Model/UserModel')
const jwt = require('jsonwebtoken');
const userService = require('../Service/UserService');

class DefaultController{

    registerAction(req, res){
        let post = req.body;

        let email = post.email;
        let password = post.password;

        if(userService.isValidPassword(password) && userService.isValidEmail(email)) {
            res.json({
                success: true
            })
        }

        //TODO: return more specific error message
        res.json({
            success: false,
            message: 'ERR_REGISTRATION_FAILED'
        })
    };

    loginAction(req, res){
        let post = req.body;
        let email = post.email;
        let password = post.password;

        if ((email != null) && (password != null)) {
            User.findOne({email: email}, function (user) {
                if (user) {
                    if (user.password === password) {
                        let token = jwt.sign({userId: user._id}, 'secret');

                        res.json({
                            success: false,
                            Token: token
                        })
                    }
                }

                return false
            });

        //TODO: return more specific error message
        res.json({
            success: false,
            message: 'ERR_REGISTRATION_FAILED'
        })
    }
}

module.exports = new DefaultController();