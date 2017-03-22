const mongoose = require('mongoose');
const User = require('../Model/UserModel');

class DefaultController{

    registerAction(req, res){
        let post = req.body;

        let email = post.email;
        let password = post.password;

        if(this.passwordValidate(password) && this.emailValidate(email)) {
            res.json({
                success: true
            })
        }

        //TODO: return more specific error message
        res.json({
            success: false,
            message: 'ERR_REGISTRATION_FAILED'
        })
    }

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

    passwordValidate(password){

        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#])[A-Za-z\d!@?#]{5,}/;

        if (password.test(regularExpression)){
            return true;
        }

        return false
    }

    emailValidate(email){

        let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.test(regularExpression)){
            User.findOne({ email: email }, function(user){
                if(!user){
                    return true
                }
            })
        }

        return false
    }

}

module.exports = new DefaultController();