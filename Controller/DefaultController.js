const mongoose = require('mongoose');
const User = require('../Model/UserModel')

class DefaultController{

    indexAction(req, res){

    }

    registerAction(req, res){
        let post = req.body;

        let email = post.email;
        let password = post.password;
        let passwordBis = post.passwordBis;

        if(passwordValidate(password, passwordBis) && emailValidate(email)) {
            return true
        } else {
            return false
        }



    }

    userRegisterAction(req, res){
        let post = req.body;
        let email = post.email;
        let password = post.password;

        if((email != null) && (password != null)){
            User.findOne({email: email}, function(user){
                if(user){
                    return true
                } else {
                    return false
                }
            })
        }

    }

    passwordValidate(password, passwordBis){

        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#])[A-Za-z\d!@?#]{5,}/;

        if (password.test(regularExpression)){
            if (passwordBis.test(regularExpression)){
                if(password === passwordBis){
                    return true;
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    }

    emailValidate(email){

        let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.test(regularExpression)){
            User.findOne({ email: email }, function(user){
                if(user){
                    return false
                } else {
                    return true
                }
            })
        }
    }

}

module.exports = new DefaultController();