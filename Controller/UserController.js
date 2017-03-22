const User = require('../Model/UserModel');
const shortid = require('shortid');

class UserController{

    addUrlAction(req, res){
        let post = req.body;
        let newUrl = post.url;
        let regularExpression = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
        let userId = req.user.userId;

        if((newUrl != null) && (newUrl.test(regularExpression))){
            let newMime = shortid.generate();
            let currentUser = User.findById(userId,
                function(err) {
                    console.log(err);
                });
            currentUser.urls.push({url: newUrl, mime: newMime});
            currentUser.save();
            return true

        } else {
            return false
        }
    }

    deleteUrlAction(req, res){

    }

    showAction(req, res){
        let userId = req.user.userId;

        if(userId){
            let currentUser = User.findById(userId,
                function(err) {
                    console.log(err);
                });
            let res = [];
            res['msg'] = "Urls found";
            res['urls'] = currentUser.urls;
            return res;
        }
       return false;
    }
}

module.exports = new UserController();