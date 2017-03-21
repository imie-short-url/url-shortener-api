const userModel = require("../Model/UserModel");


class DefaultController{

    indexAction(req, res){

    }

    registerAction(req, res){
        var userEmail = userModel.email;
        var userPassword = userModel.password;





    }

    connectAction(req, res){

    }
}


module.exports = new DefaultController();