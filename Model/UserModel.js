const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/momoBibiUrl');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:  String,
    password: String,
    urls: [{ url: String, date: Date.now }],
    urlsMime: [{ mime: String, date: Date.now }]
});

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;