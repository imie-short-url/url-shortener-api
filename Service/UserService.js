const mongoose = require('mongoose');
const User = require('../Model/UserModel');

class UserService{

    isValidPassword(password){

        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#])[A-Za-z\d!@?#]{5,}/;

        if (regularExpression.test(password)){
            return true;
        }

        return false
    }

    isValidEmail(email){

        let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z0-9]{2,}))$/;

        if (regularExpression.test(email)){
            return true
        }

        return false
    }
}

module.exports = new UserService();