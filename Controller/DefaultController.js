const mongoose = require('mongoose');
const User = require('../Model/UserModel');
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

        if((email != null) && (password != null)){
            User.findOne({email: email}, function(user){
                if(user){
                    res.json({
                        success: false,
                        Token: 'AwesomeToken'
                    })
                }
            })
        }

        //TODO: return more specific error message
        res.json({
            success: false,
            message: 'ERR_REGISTRATION_FAILED'
        })
    }
}

module.exports = new DefaultController();